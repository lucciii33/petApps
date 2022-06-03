const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			editProfile: []
		},
		actions: {
			// Use getActions to call a function within a fuction

			editProfile: async (title, aboutme, howicanhelp, services, certifications, comments) => {
				try {
					const edit = await fetch(process.env.BACKEND_URL + `/api/profile`,

						{
							method: "POST",
							headers: { "Content-Type": "application/json" },
							body: JSON.stringify({
								title, aboutme, howicanhelp, services, certifications, comments
							}),
						}
					)
					if (edit.ok) {
						const resp = await edit.json()
						localStorage.setItem('profile', JSON.stringify(resp))

					}
				} catch (error) {
					throw Error("something went wrong")
				}
			}
		}
	};
};

export default getState;
