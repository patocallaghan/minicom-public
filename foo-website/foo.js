class Foo {
  constructor() {
    this.fooEndpoint = 'https://3000-patocallaghan-minicompub-a1z8h7x36h2.ws-eu31.gitpod.io/foo';

    $(document).ready(() => {
      this.verify();
    });
  }

  async verify() {
    try {
      let response = await $.post(this.fooEndpoint).then();
      if (response.success === true) {
        alert('Yay! Everything works');
      } else {
        alert('Unexpected response');
      }
    } catch (error) {
      alert('There has been a problem with the request');
    }
  }
}
