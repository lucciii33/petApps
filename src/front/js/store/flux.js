const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      profile: [],
    },
    actions: {
      // Use getActions to call a function within a fuction

      // createProfile: async (title, aboutme, howicanhelp, services, certifications, comments) => {
      // 	try {
      // 		const edit = await fetch(process.env.BACKEND_URL + `/api/profile`,

      // 			{
      // 				method: "POST",
      // 				headers: { "Content-Type": "application/json" },
      // 				body: JSON.stringify({
      // 					title, aboutme, howicanhelp, services, certifications, comments
      // 				}),
      // 			}
      // 		)
      // 		if (edit.ok) {
      // 			const resp = await edit.json()
      // 			localStorage.setItem('profile', JSON.stringify(resp))
      // 			setStore({ profile: resp })

      // 		}
      // 	} catch (error) {
      // 		throw Error("something went wrong")
      // 	}
      // },
      addprofile: (aboutme, howicanhelp, services, certifications) => {
        fetch(process.env.BACKEND_URL + `/api/profile`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            aboutme,
            howicanhelp,
            services,
            certifications,
          }),
        })
          .then((res) => res.json())
          .then(() => {
            getActions().getProfileData();
          })
          .catch((err) => console.log(err));
      },

      getProfileData: () => {
        fetch(process.env.BACKEND_URL + `/api/profile`)
          .then((res) => res.json())
          .then((dataJson) => setStore({ profile: dataJson }))
          .catch((err) => console.log(err));
      },

      /////////////here is the token
      loginToken: (email, password) => {
        const opts = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        };
        fetch('https://3001-lucciii33-petapps-nhmbcqwnuys.ws-us49.gitpod.io/api/token', opts)
          .then((resp) => {
            if (resp.status === 200) {
              return resp.json();
            } else {
              alert("some errors");
            }
          })

          .then()
          .catch((error) => {
            console.error("there was an error!!!", error);
          });
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
