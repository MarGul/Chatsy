<template>
	<div class="signin-view">
		<div class="container">
			<div class="jumbotron">
				<h2 class="text-center">Welcome in!</h2>
				<div class="row">
					<div class="col-xs-12 col-sm-6 col-sm-push-3 col-md-4 col-md-push-4">
						<div class="alert alert-danger" v-if="message" v-text="message"></div>
						<form @submit.prevent="signin">
							<div class="form-group">
								<label class="control-label">Email</label>
								<input type="email" class="form-control" v-model="form.email" required>
							</div>
							<div class="form-group">
								<label class="control-label">Password</label>
								<input type="password" class="form-control" v-model="form.password" required>
							</div>
							<div class="form-group">
								<button type="submit" class="btn btn-success">Sign in</button>
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
					email: '',
					password: ''
				},
				message: ''
			}
		},
		methods: {
			signin() {
				this.processing = true;
				this.message = '';
				axios.post('/login', this.form)
					.then(response => {
						this.$router.push('/chat');
						this.processing = false;
					})
					.catch(error => {
						this.message = error.response.data.errors.email[0];
						this.form.password = '';
						this.processing = false;
					});
			}
		}
	}
</script>