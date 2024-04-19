exports.LoginPage = 

class LoginPage{

    constructor(page){

        this.page = page
        this.usernameInput = '#user-name'
        this.passwordInput = '#password'
        this.loginBtn = '#login-button'
        this.errorText = "h3[data-test='error']"

    }

    async goToPage(){

        await this.page.goto('https://www.saucedemo.com/')

    }

    async logIn(username, password){

        await this.page.locator(this.usernameInput).fill(username)
        await this.page.locator(this.passwordInput).fill(password)
        await this.page.locator(this.loginBtn).click()

    }
}