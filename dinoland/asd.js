let { pay } = this.props;
return (
  <Row><Col md={4}></Col><Col md={4}><center>
    <h2>Checkout</h2>
    <h5>Horray! You're a Metamask user.</h5>
    <p>We'll give you the good stuff.</p>
    <div>
      <form>
        <br/>
        <FormGroup>
          <FormControl type="text" value={pay.name} onChange={this.updateName.bind(this)}/>
          Name
          <FormControl type="text" value={pay.address} onChange={this.updateAddress.bind(this)}/>
          Address
          <FormControl type="text" value={pay.city} onChange={this.updateCity.bind(this)}/>
          City
          <FormControl type="text" value={pay.country} onChange={this.updateCountry.bind(this)}/>
          Country
        </FormGroup>
      </form>
      <br/>
      <Button bsStyle="primary" bsSize="large" onClick={this.sendTxn.bind(this)}>
        Pay ${this.props.pay.usd_amt}
      </Button>
    </div>
  </center></Col></Row>
);