const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      user: {},
      userDoctor: {},
      allDoctors: {},
      doctorsbyId: {},
    },
    actions: {
      /////////////here is the token
      loginToken: async (email, password) => {
        console.log("function called")
        const resp = await fetch(`${process.env.BACKEND_URL}/api/user/signin`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password })
        });
        console.log("after fetch")
        if (!resp.ok) throw "Problem with the response";

        if (resp.status === 401) {
          throw "Invalid credentials";
        } else if (resp.status === 400) {
          throw "Invalid email or password format";
        }

        const data = await resp.json();
        console.log("data", data)
        // save your token in the sessionStorage
        setStore({ user: data.user });
        sessionStorage.setItem("jwt-token", data.access_token);
        // console.log(loggId)
        return data.access_token;

      },
      registerUser: async (email, password, first_name, last_name, phone) => {
        const resp = await fetch(`${process.env.BACKEND_URL}/api/user/register`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password, first_name, last_name, phone })
        });

        if (!resp.ok) throw "Problem with the response";

        if (resp.status === 401) {
          throw "Invalid credentials";
        } else if (resp.status === 400) {
          throw "Invalid email or password format";
        }
      },

      // here start doctors functions

      registerUserDoctor: async (email, full_name, phone, password, specialty, sub_specialty, years_of_experience, aboutme, howicanhelp, services, certifications) => {
        const resp = await fetch(`${process.env.BACKEND_URL}/api/userdoctors/register`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, full_name, phone, password, specialty, sub_specialty, years_of_experience, aboutme, howicanhelp, services, certifications })
        });

        if (!resp.ok) throw "Problem with the response";

        if (resp.status === 401) {
          throw "Invalid credentials";
        } else if (resp.status === 400) {
          throw "Invalid email or password format";
        }
      },
      loginTokenDoctor: async (email, password) => {
        console.log("function called")
        const resp = await fetch(`${process.env.BACKEND_URL}/api/signin/doctors`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password })
        });
        console.log("after fetch")
        if (!resp.ok) throw "Problem with the response";

        if (resp.status === 401) {
          throw "Invalid credentials";
        } else if (resp.status === 400) {
          throw "Invalid email or password format";
        }

        const data = await resp.json();
        console.log("data", data)
        // save your token in the sessionStorage
        setStore({ userDoctor: data.user });
        sessionStorage.setItem("jwt-token", data.access_token);
        // console.log(loggId)
        return data.access_token;

      },

      updateDoctorsProfile: async (email, full_name, phone, specialty, sub_specialty, years_of_experience, id) => {
        const store = getStore()
        try {
          const respon = await fetch(`${process.env.BACKEND_URL}/api/userdoctors/profile/${id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email, full_name, phone, specialty, sub_specialty, years_of_experience, id
            }),
          })
          if (respon.ok) {
            const data = await respon.json()
            setStore({ userDoctor: data });
          }

        }
        catch (error) {
          throw Error("not working")
        }
      },

      getDataDoctors: async () => {
        try {
          const response = await fetch(`${process.env.BACKEND_URL}/api/userdoctors`);
          if (response.ok) {
            const data = await response.json();
            setStore({ allDoctors: data.user })
            console.log(data)
          }
        } catch (error) {
          throw Error(error);
        }
      },

      getDataDoctorsbyId: async (id) => {
        try {
          const response = await fetch(`${process.env.BACKEND_URL}/api/userdoctors/${id}`);
          if (response.ok) {
            const data = await response.json();
            console.log(data)
            // setStore({ allDoctors: data.user })
            return true
          }
        } catch (error) {
          throw Error(error);
        }
      },


    },
  };
};

export default getState;
