import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Profile } from "./pages/profile";
import { AboutUs } from "./pages/aboutus";
import injectContext from "./store/appContext";
import { CompOne } from "./component/mainpagecompone";
import { CompTwo } from "./component/mainpagecomptwo";
import { PractitionerHomePage } from "./pages/practitionerhomepage";
import { UserView } from "./pages/userview";
import { SingIn } from "./pages/singin";
import { Register } from "./pages/register";
import { SinginInformation } from "./pages/singinInformation";
import { RegisterDoctor } from "./pages/registerDoctor";
import { LoginDoctor } from "./pages/logindoctor";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
							<CompOne />
							<CompTwo />
						</Route>
						<Route exact path="/profile">
							<Profile />
						</Route>
						<Route exact path="/aboutus">
							<AboutUs />
						</Route>
						<Route exact path="/singin">
							<SingIn />
						</Route>
						<Route exact path="/registerDoctor">
							<RegisterDoctor />
						</Route>
						<Route exact path="/logindoctor">
							<LoginDoctor />
						</Route>
						<Route exact path="/register">
							<Register />
						</Route>
						<Route exact path="/singinInformation">
							<SinginInformation />
						</Route>
						<Route exact path="/practitionerhomepage">
							<PractitionerHomePage />
						</Route>
						<Route exact path="/userview">
							<UserView />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
