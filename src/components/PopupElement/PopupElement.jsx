import { useState, useCallback, useMemo, useEffect } from "react";

// hooks
import { useValidation } from "../../hooks/useValidation";

// components
import { Input } from "../Input";
import { Button } from "../Button";
import { HelpText } from "../HelpText";

// styles
import "./PopUpElement.css";

export const PopupElement = ({
  inputs,
  currentObject,
  setCurrentObject,
  popUpElementError,
  handleSubmit,
  submitButtonLabel,
  customStyles,
  popUpElementSuccess,
}) => {
  const [emptyFields, setEmptyFields] = useState({});
  const [notValidated, setNotValidated] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleEmptyFields = useCallback(
    (inputs) => {
      inputs.map((input) => {
        if (input.required === true && currentObject[input.name].length < 1) {
          setEmptyFields((prev) => ({ ...prev, [input.name]: true }));
        }
        if (input.required === false) {
          setEmptyFields((prev) => ({ ...prev, [input.name]: false }));
        }
      });
    },
    [currentObject],
  );

  const handleSetFields = useCallback((inputs) => {
    inputs?.map((input) => {
      if (input.required) {
        setCurrentObject((prev) => ({
          ...prev,
          [input.name]: input?.defaultValue || "",
        }));
      }
    });
  }, []);

  useEffect(() => {
    handleSetFields(inputs);
  }, []);

  const handleInputChange = (e, params) => {
    const { name, validation, onChange, successText, failureText } = params;
    const inputValue = e.target.value.trim();
    if (params.validation) {
      let helpText = {
        [name]: {
          validationType: [validation],
          success: successText,
          failure: failureText,
        },
      };

      let formError = useValidation({ [name]: inputValue || "" }, helpText);

      let error = formError[name];

      error?.failure && setNotValidated(true);

      if (error?.success || inputValue?.length < 1) {
        setNotValidated(false);
      }

      setFormErrors((prev) => ({ ...prev, ...formError }));
    }

    inputValue?.length > 0 && setEmptyFields((prev) => ({ ...prev, [name]: false }));

    onChange(e);
  };

  const handleInputChangeWithType = (e, params) => {
    console.log(e);
    const { name, onChange } = params;
    setEmptyFields((prev) => ({ ...prev, [name]: false }));
    let data = {
      target: {
        value: e,
        name,
      },
    };

    onChange(data);
  };

  // const notEmptyList = useMemo(
  //   () =>
  //     Object.keys(currentObject)?.filter((key) => {
  //       const value = currentObject[key];
  //       if (!value) return true; // Falsy value
  //       if (!value && value !== false)
  //         if (Array.isArray(value) && value.length === 0) return true; // Empty array
  //       if (typeof value === "object" && Object.keys(value).length === 0) return true; // Empty object
  //       return false; // Not empty
  //     }) ?? [],
  //   [currentObject],
  // );

  const notEmptyList = useMemo(
    () =>
      Object.keys(currentObject)?.filter((key) => {
        const value = currentObject[key];
        const test = inputs?.find((input) => input?.name === key);
        if (test?.required) {
          if (!value && value !== false) return true; // Falsy value
          if (Array.isArray(value) && value.length === 0) return true; // Empty array
          if (typeof value === "object" && Object.keys(value).length === 0) return true; // Empty object
        }
        return false; // Not empty
      }) ?? [],
    [currentObject],
  );

  const handleSubmitClick = (inputs) =>
    notEmptyList.length > 0 ? handleEmptyFields(inputs) : handleSubmit();

  return (
    <div className="popup-element-wrap">
      <div className="popup-element-inputs" style={customStyles}>
        {inputs?.map((params, index) => {
          return (
            <div className="popup-element-input-container" key={index}>
              <Input
                type={
                  params.type === "select"
                    ? "lable-input-select"
                    : params.directType
                    ? params.type
                    : "default"
                }
                inputType={params?.inputType}
                label={params.title}
                name={params.name}
                multiplyData={params.multiplyData}
                value={
                  params.type === "select"
                    ? currentObject[params?.name] || "any"
                    : currentObject[params?.name] || ""
                }
                onChange={(e) =>
                  !params.type || params.type === "textarea"
                    ? handleInputChange(e, params)
                    : handleInputChangeWithType(e, params)
                }
                emptyFieldErr={params.required && emptyFields[params?.name]}
                customStyles={{ width: "100%" }}
                placeholder={params?.placeholder}
                handleItemRemove={params.handleItemRemove}
                icon={params?.icon}
                readOnly={params?.readOnly}
                rows={params?.rows}
                cols={params?.cols}
                disabled={params?.disabled}
                autoFocus={params?.autoFocus}
                resize={params?.resize}
                maxLength={params?.maxLength}
                statusCard={
                  formErrors[params?.name] &&
                  currentObject[params?.name]?.length > 0 && (
                    <HelpText
                      status={formErrors[params.name].failure ? "error" : "success"}
                      title={
                        formErrors[params.name].failure || formErrors[params.name].success
                      }
                      fontSize={"font-12"}
                      icon={true}
                    />
                  )
                }
                selectHandler={(opt) => {
                  handleInputChangeWithType(opt, params);
                }}
                defaultData={params?.options}
                onChangeDropdown={params?.onChangeDropdown}
              />
              {params.handleMax && (
                <p className="font-12 popup-element-max" onClick={params.handleMax}>
                  MAX
                </p>
              )}
            </div>
          );
        })}
      </div>
      <Button
        label={submitButtonLabel}
        size={"btn-lg"}
        type={"btn-primary"}
        element={"button"}
        customStyles={{
          margin: "0",
          width: "100%",
          backgroundColor: "#00C6FF",
        }}
        onClick={() => handleSubmitClick(inputs)}
        disabled={notValidated || (popUpElementError && true)}
      />
      {popUpElementError && (
        <HelpText
          status={"warning"}
          title={popUpElementError}
          fontSize={"font-12"}
          icon={true}
          customStyles={{ marginRight: "auto" }}
        />
      )}
      {popUpElementSuccess && (
        <HelpText
          status={"success"}
          title={popUpElementSuccess}
          fontSize={"font-12"}
          icon={true}
          customStyles={{ marginRight: "auto" }}
        />
      )}
    </div>
  );
};
