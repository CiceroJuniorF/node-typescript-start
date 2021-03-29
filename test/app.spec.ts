import {App}  from "../src/app"

describe("App", () => {
    it("bootstrap", async () => {
        let app = new App();       
        expect(app.bootstrap()).toBe("stuff");
    });
});