const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      loggId: [],
    },
    actions: {
      /////////////here is the token
      loginToken: async (email, password) => {
        const resp = await fetch(`${process.env.BACKEND_URL}/api/user/signin`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password })
        });

        if (!resp.ok) throw "Problem with the response";

        if (resp.status === 401) {
          throw "Invalid credentials";
        } else if (resp.status === 400) {
          throw "Invalid email or password format";
        }

        const data = await resp.json();
        console.log("data", data)
        // save your token in the sessionStorage
        setStore({ loggId: data });
        sessionStorage.setItem("jwt-token", data);
        // console.log(loggId)
        return data.access_token;

      },
      registerUser: async (email, password) => {
        const resp = await fetch(`${process.env.BACKEND_URL}/api/user/register`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password })
        });

        if (!resp.ok) throw "Problem with the response";

        if (resp.status === 401) {
          throw "Invalid credentials";
        } else if (resp.status === 400) {
          throw "Invalid email or password format";
        }
      },
    },
  };
};

export default getState;
