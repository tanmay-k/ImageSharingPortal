class createSite extends HTMLElement {
	constructor() {
		super()
		var shadow = this.attachShadow({mode:'open'})

		shadow.innerHTML = `
		<link rel=stylesheet href="../css/main.css">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>

		<script src="../scripts/createUserSite.js"></script>

		<div class="row">
			<div class="col-sm-3">

			</div>
			<div class="col-sm-6">
				<div class="jumbotron">
					<h1>Welcome!</h1>
				</div>
			</div>
			<div class="col-sm-3">

			</div>
		</div>
		<div class="row">
			<div class="col-sm-3">

			</div>
			<div class="col-sm-6">
				<div class="jumbotron">
					<h1>Create Profile</h1>
  						<div class="media p-3">
							<div class="tooltip">Hello Hello<a href="#"><img src="avatar.png" alt="" class="mr-3 rounded-circle" style="width:60px;"></a>
								<span class="tooltiptext">Update Profile Photo</span>
							</div>
    							<!--div class="media-body">
      								<button type="button" id="updateProfilePhotoBtn" class="btn btn-sm btn-primary mt-2" onclick="process()">Update Profile Photo</button>
    							</div-->
  						</div>
					<form class="form" enctype="multipart/formdata">
						<label for="user-name" class="mr-sm-2">Your Name:</label>
						<input type="text" class="form-control mb-2 mr-sm-2" id="user-name">
						<label for="bio" class="mr-sm-2">Bio (optional) :</label>
						<textarea id="bio" class="form-control mb-2 mr-sm-2"></textarea>
						<button type="button" id="createSiteBtn" class="btn btn-primary float-right" onclick="process()">Create Site</button>
					</form>
				</div>
			</div>
			<div class="col-sm-3">

			</div>
		</div>
		`;
	}
}

customElements.define('create-site',createSite)
