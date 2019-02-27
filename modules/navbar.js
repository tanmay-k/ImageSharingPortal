class NavbarElement extends HTMLElement {
	constructor() {
		super()
		var shadow = this.attachShadow({mode:'open'})

		function renderNavLink(pathname,label)	{
			if( window.location.pathname === pathname )	{
				return `
				<li class="nav-item active">
					<a class="nav-link" href="${pathname}">${label}</a>
				</li>
				`;
			}
			else {
				return `
				<li class="nav-item">
					<a class="nav-link" href="${pathname}">${label}</a>
				</li>
				`;
			}
		}
		shadow.innerHTML = `
		<link rel=stylesheet href="../css/main.css">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>

		<nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top justify-content-left">
			<a class="navbar-brand" href="/">Image Sharing Portal</a>

			<ul class="navbar-nav">
				${renderNavLink('/','Home')}
				${renderNavLink('/profile.html','Profile')}
				${renderNavLink('/userSite/home.html','Avbcd')}
			</ul>
		</nav>

		<div class="contents">
		<slot></slot>
		</div>

		<script type="module" src="createSite.js"></script>
		`
	}
}

customElements.define('img-share-portal',NavbarElement)
