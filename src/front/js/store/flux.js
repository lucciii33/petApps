const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			profile: []
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
					})
				})
					.then(res => res.json())
					.then(() => {
						getActions().getProfileData();
					})
					.catch(err => console.log(err));
			},

			getProfileData: () => {
				fetch(process.env.BACKEND_URL + `/api/profile`)
					.then(res => res.json())
					.then(dataJson => setStore({ profile: dataJson }))
					.catch(err => console.log(err));
			},
		}
	};
};

export default getState;
