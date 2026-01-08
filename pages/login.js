export default class LoginPage {

    constructor(page) {
        this.page = page;
        this.username = "#email1";
        this.password = "#password1";
        this.loginButton = "//button[normalize-space()='Sign in']";
    }

    async loginToApplication(
        username = "admin@email.com",
        password = "admin@123"
    ) {
        await this.page.fill(this.username, username);
        await this.page.fill(this.password, password);
        await this.page.click(this.loginButton);
    }
}
