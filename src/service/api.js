const API_URL = import.meta.env.VITE_API_URL 


    export const Login =  async (data) => {
        try {
            let res = await fetch(API_URL + "/api/v1/auth/login",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
            let responseData = await res.json();
            console.log(responseData);
            return responseData;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }       
  
 