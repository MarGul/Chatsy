<template>
	<div class="register-view">
		<div class="container">
			<div class="jumbotron">
				<h2 class="text-center">Sign up for Chatsy!</h2>
				<div class="row">
					<div class="col-xs-12 col-sm-6 col-sm-push-3 col-md-4 col-md-push-4">
						<div class="alert" :class="[this.type]" v-if="message" v-text="message"></div>
						<form @submit.prevent="signup">
							<div class="form-group">
								<label class="control-label">Name</label>
								<input type="text" class="form-control" v-model="form.name" required>
							</div>
							<div class="form-group">
								<label class="control-label">Email</label>
								<input type="email" class="form-control" v-model="form.email" required>
							</div>
							<div class="form-group">
								<label class="control-label">Password</label>
								<input type="password" class="form-control" v-model="form.password" required>
							</div>
							<div class="form-group">
								<label class="control-label">Repeat password</label>
								<input type="password" class="form-control" v-model="form.password_confirmation" required>
							</div>
							<div class="form-group">
								<button type="submit" class="btn btn-success" :disabled="processing">Sign up</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					name: '',
					email: '',
					password: '',
					password_confirmation: ''
				},
				type: '',
				message: '',
				processing: false
			}
		},
		methods: {
			signup() {
				this.processing = true;
				this.type = '';
				this.message = '';
				
				axios.post('/register', this.form)
					.then(response => {
						this.type = 'alert-success';
						this.message = 'Successfully signed up. Please sign in to start using Chatsy';

						this.form.name = '';
						this.form.email = '';
						this.form.password = '';
						this.form.password_confirmation = '';

						this.processing = false;
					})
					.catch(error => {
						this.type = 'alert-danger';
						this.message = 'Could not sign you up :( . Please try again.';
						this.processing = false;
					});
			}
		}
	}
</script>