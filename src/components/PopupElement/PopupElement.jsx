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
    [currentObject]
  );

  const handleSetFields = useCallback((inputs) => {
    inputs?.map((input) => {
      if (input.required) {
        setCurrentObject((prev) => ({ ...prev, [input.name]: "" }));
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

    inputValue?.length > 0 &&
      setEmptyFields((prev) => ({ ...prev, [name]: false }));

    onChange(e);
  };

  const handleInputChangeWithType = (e, params) => {
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

  const notEmptyList = useMemo(
    () =>
      Object.keys(currentObject)?.filter((key) => !currentObject[key]) ?? [],
    [currentObject]
  );

  const handleSubmitClick = (inputs) =>
    notEmptyList.length > 0 ? handleEmptyFields(inputs) : handleSubmit();

  return (
    <div className='popup-element-wrap'>
      <div className='popup-element-inputs' style={customStyles}>
        {inputs?.map((params, index) => {
          return (
            <div className='popup-element-input-container' key={index}>
              <Input
                type={
                  params.type === "select" ? "lable-input-select" : "default"
                }
                inputType={params?.inputType}
                label={params.title}
                name={params.name}
                value={
                  params.type === "select"
                    ? "Any"
                    : currentObject[params?.name] || ""
                }
                onChange={(e) =>
                  !params.type
                    ? handleInputChange(e, params)
                    : handleInputChangeWithType(e, params)
                }
                emptyFieldErr={params.required && emptyFields[params?.name]}
                customStyles={{ width: "100%" }}
                placeholder={params?.placeholder}
                statusCard={
                  formErrors[params?.name] &&
                  currentObject[params?.name]?.length > 0 && (
                    <HelpText
                      status={
                        formErrors[params.name].failure ? "error" : "success"
                      }
                      title={
                        formErrors[params.name].failure ||
                        formErrors[params.name].success
                      }
                      fontSize={"font-12"}
                      icon={true}
                    />
                  )
                }
                selectHandler={(opt) => handleInputChangeWithType(opt, params)}
                defaultData={params?.options}
              />
              {params.handleMax && (
                <p
                  className='font-12 popup-element-max'
                  onClick={params.handleMax}
                >
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
        customStyles={{ margin: "0", width: "100%", backgroundColor: "#00C6FF" }}
        onClick={() => handleSubmitClick(inputs)}
        disabled={notValidated || (popUpElementError && true)}
      />
      {popUpElementError && (
        <HelpText
          status={"warning"}
          title={popUpElementError}
          color={"#9CCC65"}
          fontSize={"font-12"}
          icon={true}
          customStyles={{ marginRight: "auto" }}
        />
      )}
    </div>
  );
};
