import React from 'react';

export const useValidation = (formData) => {
    const { email, password } = formData;
    
    const errors = {};

    const validation = {
        email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ ,
        password: /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/,
    };

    if (!validation.email.test(email) && formData.email.length > 0) {
        errors.email = "email must be valid";
    };

    if (!validation.password.test(password) && formData.password.length > 0) {
        errors.password = "password must contain a minimum of 8 characters, uppercase and special character";
    };

    return errors;
};
