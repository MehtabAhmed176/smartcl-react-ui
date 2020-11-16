const useValidation = {
    isValidName: (name) => {
        console.log(name)
    },
    isValidEmail: (email) => { },
    isValidResumeData: (jd) => {
        console.log('jd', jd.length)
        const response = { isValid: true, errorMsg: [] }
        if (jd.length === 0 || jd.trim() === '') {
            response.isValid = false
            response.errorMsg.push("Cannot be empty")
        }
        if (jd.length > 10000) {
            response.isValid = false
            response.errorMsg.push("Length cannot be greater than 10000 characters")
        }
        if (jd.length < 200) {
            response.isValid = false
            response.errorMsg.push("Length cannot be less than 200 characters")
        }
        return response
    },

    isValidJobDescription: (resume) => {
        const response = { isValid: true, errorMsg: [] }
        if (resume.length === 0 || resume.trim() === '') {
            response.isValid = false
            response.errorMsg.push(" jobdescription Cannot be empty")
        }

        if (resume.length > 10000) {
            response.isValid = false
            response.errorMsg.push("Length cannot be greater than 10000 characters")
        }



        // 

        return response
    }
}

export default useValidation