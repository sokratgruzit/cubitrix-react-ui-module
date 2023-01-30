export const useValidation = (formData, helpTexts) => {
    const errors = {};

    const validation = {
        email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ ,
        password: /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/,
        numbers: /^[0-9\b]+$/,
    };

    Object.keys(formData).map(key => {
        if (!validation[helpTexts[key].validationType].test(formData[key]) && formData[key].length > 0) {
            errors[key] = {
                failure: helpTexts[key].failure
            };
        } else if (validation[helpTexts[key].validationType].test(formData[key]) && formData[key].length > 0) {
            errors[key] = {
                success: helpTexts[key].success
            };
        };
    });

    return errors;
};