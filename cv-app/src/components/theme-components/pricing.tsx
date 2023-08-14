export default function Pricing() {
  return (
    <>
      <div className="row">
        <div className=" col-xs-12 col-sm-12 ">
          <div className="block-title">
            <h2>Pricing</h2>
          </div>
        </div>
      </div>

      <div className="row">
        <div className=" col-xs-12 col-sm-12 ">
          <div className="fw-pricing clearfix row">
            <div className="fw-package-wrap col-md-4 ">
              <div className="fw-package">
                <div className="fw-heading-row">
                  <span>Silver</span>
                </div>

                <div className="fw-pricing-row">
                  <span>$64</span>
                  <small>per month</small>
                </div>

                <div className="fw-button-row">
                  <a href="#" target="_self" className="btn btn-secondary">
                    Free Trial
                  </a>
                </div>

                <div className="fw-default-row">Lorem ipsum dolor</div>
                <div className="fw-default-row">Pellentesque scelerisque</div>
                <div className="fw-default-row">Morbi eu sagittis</div>
              </div>
            </div>

            <div className="fw-package-wrap col-md-4 highlight-col ">
              <div className="fw-package">
                <div className="fw-heading-row">
                  <span>Gold</span>
                </div>

                <div className="fw-pricing-row">
                  <span>$128</span>
                  <small>per month</small>
                </div>

                <div className="fw-button-row">
                  <a href="#" target="_self" className="btn btn-primary">
                    Free Trial
                  </a>
                </div>

                <div className="fw-default-row">Lorem ipsum dolor</div>
                <div className="fw-default-row">Pellentesque scelerisque</div>
                <div className="fw-default-row">Morbi eu sagittis</div>
                <div className="fw-default-row">Donec non diam</div>
                <div className="fw-default-row"></div>
              </div>
            </div>

            <div className="fw-package-wrap col-md-4 default-col ">
              <div className="fw-package">
                <div className="fw-heading-row">
                  <span>Platinum</span>
                </div>

                <div className="fw-pricing-row">
                  <span>$256</span>
                  <small>per month</small>
                </div>

                <div className="fw-button-row">
                  <a href="#" target="_self" className="btn btn-primary">
                    Free Trial
                  </a>
                </div>

                <div className="fw-default-row">Lorem ipsum dolor</div>
                <div className="fw-default-row">Pellentesque scelerisque</div>
                <div className="fw-default-row">Morbi eu sagittis</div>
                <div className="fw-default-row">Donec non diam</div>
                <div className="fw-default-row">Aenean nec libero</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
