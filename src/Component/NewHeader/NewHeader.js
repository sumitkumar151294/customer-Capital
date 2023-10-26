import React, { useEffect, useState } from 'react'

const NewHeader = () => {
  const [isMobileMenuActive, setIssMobileMenuActive] = useState(sessionStorage.getItem('mobileMenuActive'));

  useEffect(() => {debugger;
    // sessionStorage to check if the mobile menu is active.
    if (isMobileMenuActive === 'true') {
      // Add the 'active' class to the 'menu-overlay' and 'menu' elements.
      document.querySelector('.menu-overlay').classList.add('active');
      document.querySelector('.menu').classList.add('active');
    } else {
      // Remove the 'active' class to the 'menu-overlay' and 'menu' elements.
      document.querySelector('.menu-overlay').classList.remove('active');
      document.querySelector('.menu').classList.remove('active');
    }
  }, [isMobileMenuActive]);

  const handleMobileMenuClose = () => {
    // Add 'false' in sessionStorage
    sessionStorage.setItem('mobileMenuActive', 'false');
    setIssMobileMenuActive(false);
  };

  return (
    <>
      <header class="newheader user">
        <div class="container">
          <div class="row v-center kjk ">
            <div class="header-item item-center">
              <div className='menu-overlay'></div>
              <nav className='menu'>
                <div class="mobile-menu-head">
                  <div class="go-back"><i class="fa fa-angle-left"></i></div>
                  <div class="current-menu-title"></div>
                  <div class="mobile-menu-close" onClick={handleMobileMenuClose}>&times;</div>
                </div>
                <ul class="menu-main text-center">
                  <li class="menu-item-has-children magiccc">
                    <a href="#">Brands <i class="fa fa-angle-down"></i></a>
                    <div class="sub-menu mega-menu mega-menu-column-4 ">
                      <div class="list-item">
                        <h4 class="title">Brands</h4>
                        <ul>
                          <li><a href="#">Amazon</a></li>
                          <li><a href="#">Flipcart</a></li>
                          <li><a href="#">Snapdeal</a></li>
                          <li><a href="#">Snapdeal</a></li>
                        </ul>
                      </div>
                    </div>
                  </li>

                  <li class="menu-item-has-children magiccc">
                    <a href="#">About <i class="fa fa-angle-down"></i></a>
                    <div class="sub-menu mega-menu mega-menu-column-4 ">
                      <div class="list-item">
                        <h4 class="title">Loyalty Program</h4>
                        <ul>
                          <li><a href="#">About Gift</a></li>
                          <li><a href="#">Terms and Conditions</a></li>
                          <li><a href="#">FAQ'S</a></li>
                        </ul>
                      </div>
                    </div>
                  </li>

                  <li class="menu-item-has-children">
                    <a href="#">Dinning <i class="fa fa-angle-down"></i></a>
                    <div class="sub-menu mega-menu mega-menu-column-4">
                      <div class="list-item">
                        <h4 class="title">Electronics</h4>
                        <ul>
                          <li><a href="#">Audio</a></li>
                          <li><a href="#">BT Speaker</a></li>
                          <li><a href="#">Soundbar</a></li>
                        </ul>
                        <h4 class="title">Health & Wellness</h4>
                        <ul>
                          <li><a href="#">Hair Dryer</a></li>
                          <li><a href="#">Groomer</a></li>
                          <li><a href="#">Hair Straightener</a></li>
                          <li><a href="#">Shaver</a></li>
                          <li><a href="#">Trimmer</a></li>
                        </ul>
                      </div>
                      <div class="list-item">
                        <h4 class="title">HouseHold</h4>
                        <ul>
                          <li><a href="#">Dishwasher</a></li>
                          <li><a href="#">Food Processor</a></li>
                          <li><a href="#">Hand Toolkit</a></li>
                          <li><a href="#">LED TV</a></li>
                          <li><a href="#">Locker</a></li>
                          <li><a href="#">Refrigerator</a></li>
                          <li><a href="#">Split AC</a></li>
                          <li><a href="#">Vacuum Cleaner</a></li>
                          <li><a href="#">Washing Machine</a></li>
                          <li><a href="#">Water Dispenser</a></li>
                          <li><a href="#">Window AC</a></li>
                        </ul>
                      </div>
                      <div class="list-item">
                        <h4 class="title">Brands</h4>
                        <ul>
                          <li><a href="#">Black and Decker</a></li>
                          <li><a href="#">Bluestar</a></li>
                          <li><a href="#">Bosch</a></li>
                          <li><a href="#">Godrej</a></li>
                          <li><a href="#">Haier</a></li>
                          <li><a href="#">IFB</a></li>
                          <li><a href="#">Panasonic</a></li>
                          <li><a href="#">Philips</a></li>
                          <li><a href="#">Sony</a></li>
                          <li><a href="#">Voltas</a></li>
                          <li><a href="#">Whirlpool</a></li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li class="menu-item-has-children">
                    <a href="#">Electronics <i class="fa fa-angle-down"></i></a>
                    <div class="sub-menu mega-menu mega-menu-column-4">
                      <div class="list-item">
                        <h4 class="title">Electronics</h4>
                        <ul>
                          <li><a href="#">Audio</a></li>
                          <li><a href="#">BT Speaker</a></li>
                          <li><a href="#">Soundbar</a></li>
                        </ul>
                        <h4 class="title">Health & Wellness</h4>
                        <ul>
                          <li><a href="#">Hair Dryer</a></li>
                          <li><a href="#">Groomer</a></li>
                          <li><a href="#">Hair Straightener</a></li>
                          <li><a href="#">Shaver</a></li>
                          <li><a href="#">Trimmer</a></li>
                        </ul>
                      </div>
                      <div class="list-item">
                        <h4 class="title">HouseHold</h4>
                        <ul>
                          <li><a href="#">Dishwasher</a></li>
                          <li><a href="#">Food Processor</a></li>
                          <li><a href="#">Hand Toolkit</a></li>
                          <li><a href="#">LED TV</a></li>
                          <li><a href="#">Locker</a></li>
                          <li><a href="#">Refrigerator</a></li>
                          <li><a href="#">Split AC</a></li>
                          <li><a href="#">Vacuum Cleaner</a></li>
                          <li><a href="#">Washing Machine</a></li>
                          <li><a href="#">Water Dispenser</a></li>
                          <li><a href="#">Window AC</a></li>
                        </ul>
                      </div>
                      <div class="list-item">
                        <h4 class="title">Brands</h4>
                        <ul>
                          <li><a href="#">Black and Decker</a></li>
                          <li><a href="#">Bluestar</a></li>
                          <li><a href="#">Bosch</a></li>
                          <li><a href="#">Godrej</a></li>
                          <li><a href="#">Haier</a></li>
                          <li><a href="#">IFB</a></li>
                          <li><a href="#">Panasonic</a></li>
                          <li><a href="#">Philips</a></li>
                          <li><a href="#">Sony</a></li>
                          <li><a href="#">Voltas</a></li>
                          <li><a href="#">Whirlpool</a></li>
                        </ul>
                      </div>
                    </div>
                  </li>

                  <li class="menu-item-has-children">
                    <a href="#">Fashion <i class="fa fa-angle-down"></i></a>
                    <div class="sub-menu mega-menu mega-menu-column-4">
                      <div class="list-item">
                        <h4 class="title">Electronics</h4>
                        <ul>
                          <li><a href="#">Audio</a></li>
                          <li><a href="#">BT Speaker</a></li>
                          <li><a href="#">Soundbar</a></li>
                        </ul>
                        <h4 class="title">Health & Wellness</h4>
                        <ul>
                          <li><a href="#">Hair Dryer</a></li>
                          <li><a href="#">Groomer</a></li>
                          <li><a href="#">Hair Straightener</a></li>
                          <li><a href="#">Shaver</a></li>
                          <li><a href="#">Trimmer</a></li>
                        </ul>
                      </div>
                      <div class="list-item">
                        <h4 class="title">HouseHold</h4>
                        <ul>
                          <li><a href="#">Dishwasher</a></li>
                          <li><a href="#">Food Processor</a></li>
                          <li><a href="#">Hand Toolkit</a></li>
                          <li><a href="#">LED TV</a></li>
                          <li><a href="#">Locker</a></li>
                          <li><a href="#">Refrigerator</a></li>
                          <li><a href="#">Split AC</a></li>
                          <li><a href="#">Vacuum Cleaner</a></li>
                          <li><a href="#">Washing Machine</a></li>
                          <li><a href="#">Water Dispenser</a></li>
                          <li><a href="#">Window AC</a></li>
                        </ul>
                      </div>
                      <div class="list-item">
                        <h4 class="title">Brands</h4>
                        <ul>
                          <li><a href="#">Black and Decker</a></li>
                          <li><a href="#">Bluestar</a></li>
                          <li><a href="#">Bosch</a></li>
                          <li><a href="#">Godrej</a></li>
                          <li><a href="#">Haier</a></li>
                          <li><a href="#">IFB</a></li>
                          <li><a href="#">Panasonic</a></li>
                          <li><a href="#">Philips</a></li>
                          <li><a href="#">Sony</a></li>
                          <li><a href="#">Voltas</a></li>
                          <li><a href="#">Whirlpool</a></li>
                        </ul>
                      </div>
                    </div>
                  </li>

                  <li class="menu-item-has-children">
                    <a href="#">Wellness <i class="fa fa-angle-down"></i></a>
                    <div class="sub-menu mega-menu mega-menu-column-4">
                      <div class="list-item">
                        <h4 class="title">Electronics</h4>
                        <ul>
                          <li><a href="#">Audio</a></li>
                          <li><a href="#">BT Speaker</a></li>
                          <li><a href="#">Soundbar</a></li>
                        </ul>
                        <h4 class="title">Health & Wellness</h4>
                        <ul>
                          <li><a href="#">Hair Dryer</a></li>
                          <li><a href="#">Groomer</a></li>
                          <li><a href="#">Hair Straightener</a></li>
                          <li><a href="#">Shaver</a></li>
                          <li><a href="#">Trimmer</a></li>
                        </ul>
                      </div>
                      <div class="list-item">
                        <h4 class="title">HouseHold</h4>
                        <ul>
                          <li><a href="#">Dishwasher</a></li>
                          <li><a href="#">Food Processor</a></li>
                          <li><a href="#">Hand Toolkit</a></li>
                          <li><a href="#">LED TV</a></li>
                          <li><a href="#">Locker</a></li>
                          <li><a href="#">Refrigerator</a></li>
                          <li><a href="#">Split AC</a></li>
                          <li><a href="#">Vacuum Cleaner</a></li>
                          <li><a href="#">Washing Machine</a></li>
                          <li><a href="#">Water Dispenser</a></li>
                          <li><a href="#">Window AC</a></li>
                        </ul>
                      </div>
                      <div class="list-item">
                        <h4 class="title">Brands</h4>
                        <ul>
                          <li><a href="#">Black and Decker</a></li>
                          <li><a href="#">Bluestar</a></li>
                          <li><a href="#">Bosch</a></li>
                          <li><a href="#">Godrej</a></li>
                          <li><a href="#">Haier</a></li>
                          <li><a href="#">IFB</a></li>
                          <li><a href="#">Panasonic</a></li>
                          <li><a href="#">Philips</a></li>
                          <li><a href="#">Sony</a></li>
                          <li><a href="#">Voltas</a></li>
                          <li><a href="#">Whirlpool</a></li>
                        </ul>
                      </div>
                    </div>
                  </li>

                  <li class="menu-item-has-children">
                    <a href="#">Gifting <i class="fa fa-angle-down"></i></a>
                    <div class="sub-menu mega-menu mega-menu-column-4">
                      <div class="list-item">
                        <h4 class="title">Electronics</h4>
                        <ul>
                          <li><a href="#">Audio</a></li>
                          <li><a href="#">BT Speaker</a></li>
                          <li><a href="#">Soundbar</a></li>
                        </ul>
                        <h4 class="title">Health & Wellness</h4>
                        <ul>
                          <li><a href="#">Hair Dryer</a></li>
                          <li><a href="#">Groomer</a></li>
                          <li><a href="#">Hair Straightener</a></li>
                          <li><a href="#">Shaver</a></li>
                          <li><a href="#">Trimmer</a></li>
                        </ul>
                      </div>
                      <div class="list-item">
                        <h4 class="title">HouseHold</h4>
                        <ul>
                          <li><a href="#">Dishwasher</a></li>
                          <li><a href="#">Food Processor</a></li>
                          <li><a href="#">Hand Toolkit</a></li>
                          <li><a href="#">LED TV</a></li>
                          <li><a href="#">Locker</a></li>
                          <li><a href="#">Refrigerator</a></li>
                          <li><a href="#">Split AC</a></li>
                          <li><a href="#">Vacuum Cleaner</a></li>
                          <li><a href="#">Washing Machine</a></li>
                          <li><a href="#">Water Dispenser</a></li>
                          <li><a href="#">Window AC</a></li>
                        </ul>
                      </div>
                      <div class="list-item">
                        <h4 class="title">Brands</h4>
                        <ul>
                          <li><a href="#">Black and Decker</a></li>
                          <li><a href="#">Bluestar</a></li>
                          <li><a href="#">Bosch</a></li>
                          <li><a href="#">Godrej</a></li>
                          <li><a href="#">Haier</a></li>
                          <li><a href="#">IFB</a></li>
                          <li><a href="#">Panasonic</a></li>
                          <li><a href="#">Philips</a></li>
                          <li><a href="#">Sony</a></li>
                          <li><a href="#">Voltas</a></li>
                          <li><a href="#">Whirlpool</a></li>
                        </ul>
                      </div>
                    </div>
                  </li>

                  <li class="menu-item-has-children">
                    <a href="#">Home Needs <i class="fa fa-angle-down"></i></a>
                    <div class="sub-menu mega-menu mega-menu-column-4">
                      <div class="list-item">
                        <h4 class="title">Electronics</h4>
                        <ul>
                          <li><a href="#">Audio</a></li>
                          <li><a href="#">BT Speaker</a></li>
                          <li><a href="#">Soundbar</a></li>
                        </ul>
                        <h4 class="title">Health & Wellness</h4>
                        <ul>
                          <li><a href="#">Hair Dryer</a></li>
                          <li><a href="#">Groomer</a></li>
                          <li><a href="#">Hair Straightener</a></li>
                          <li><a href="#">Shaver</a></li>
                          <li><a href="#">Trimmer</a></li>
                        </ul>
                      </div>
                      <div class="list-item">
                        <h4 class="title">HouseHold</h4>
                        <ul>
                          <li><a href="#">Dishwasher</a></li>
                          <li><a href="#">Food Processor</a></li>
                          <li><a href="#">Hand Toolkit</a></li>
                          <li><a href="#">LED TV</a></li>
                          <li><a href="#">Locker</a></li>
                          <li><a href="#">Refrigerator</a></li>
                          <li><a href="#">Split AC</a></li>
                          <li><a href="#">Vacuum Cleaner</a></li>
                          <li><a href="#">Washing Machine</a></li>
                          <li><a href="#">Water Dispenser</a></li>
                          <li><a href="#">Window AC</a></li>
                        </ul>

                      </div>
                      <div class="list-item">
                        <h4 class="title">Brands</h4>
                        <ul>
                          <li><a href="#">Black and Decker</a></li>
                          <li><a href="#">Bluestar</a></li>
                          <li><a href="#">Bosch</a></li>
                          <li><a href="#">Godrej</a></li>
                          <li><a href="#">Haier</a></li>
                          <li><a href="#">IFB</a></li>
                          <li><a href="#">Panasonic</a></li>
                          <li><a href="#">Philips</a></li>
                          <li><a href="#">Sony</a></li>
                          <li><a href="#">Voltas</a></li>
                          <li><a href="#">Whirlpool</a></li>
                        </ul>
                      </div>
                    </div>
                  </li>

                  <li class="menu-item-has-children">
                    <a href="#">E-Commerce <i class="fa fa-angle-down"></i></a>
                    <div class="sub-menu mega-menu mega-menu-column-4">
                      <div class="list-item">
                        <h4 class="title">Electronics</h4>
                        <ul>
                          <li><a href="#">Audio</a></li>
                          <li><a href="#">BT Speaker</a></li>
                          <li><a href="#">Soundbar</a></li>

                        </ul>
                        <h4 class="title">Health & Wellness</h4>
                        <ul>
                          <li><a href="#">Hair Dryer</a></li>
                          <li><a href="#">Groomer</a></li>
                          <li><a href="#">Hair Straightener</a></li>
                          <li><a href="#">Shaver</a></li>
                          <li><a href="#">Trimmer</a></li>
                        </ul>
                      </div>
                      <div class="list-item">
                        <h4 class="title">HouseHold</h4>
                        <ul>
                          <li><a href="#">Dishwasher</a></li>
                          <li><a href="#">Food Processor</a></li>
                          <li><a href="#">Hand Toolkit</a></li>
                          <li><a href="#">LED TV</a></li>
                          <li><a href="#">Locker</a></li>
                          <li><a href="#">Refrigerator</a></li>
                          <li><a href="#">Split AC</a></li>
                          <li><a href="#">Vacuum Cleaner</a></li>
                          <li><a href="#">Washing Machine</a></li>
                          <li><a href="#">Water Dispenser</a></li>
                          <li><a href="#">Window AC</a></li>
                        </ul>

                      </div>
                      <div class="list-item">
                        <h4 class="title">Brands</h4>
                        <ul>
                          <li><a href="#">Black and Decker</a></li>
                          <li><a href="#">Bluestar</a></li>
                          <li><a href="#">Bosch</a></li>
                          <li><a href="#">Godrej</a></li>
                          <li><a href="#">Haier</a></li>
                          <li><a href="#">IFB</a></li>
                          <li><a href="#">Panasonic</a></li>
                          <li><a href="#">Philips</a></li>
                          <li><a href="#">Sony</a></li>
                          <li><a href="#">Voltas</a></li>
                          <li><a href="#">Whirlpool</a></li>
                        </ul>
                      </div>
                    </div>
                  </li>

                  <li class="menu-item-has-children">
                    <a href="#">Entertainment <i class="fa fa-angle-down"></i></a>
                    <div class="sub-menu mega-menu mega-menu-column-4">
                      <div class="list-item">
                        <h4 class="title">Electronics</h4>
                        <ul>
                          <li><a href="#">Audio</a></li>
                          <li><a href="#">BT Speaker</a></li>
                          <li><a href="#">Soundbar</a></li>
                        </ul>
                        <h4 class="title">Health & Wellness</h4>
                        <ul>
                          <li><a href="#">Hair Dryer</a></li>
                          <li><a href="#">Groomer</a></li>
                          <li><a href="#">Hair Straightener</a></li>
                          <li><a href="#">Shaver</a></li>
                          <li><a href="#">Trimmer</a></li>
                        </ul>
                      </div>
                      <div class="list-item">
                        <h4 class="title">HouseHold</h4>
                        <ul>
                          <li><a href="#">Dishwasher</a></li>
                          <li><a href="#">Food Processor</a></li>
                          <li><a href="#">Hand Toolkit</a></li>
                          <li><a href="#">LED TV</a></li>
                          <li><a href="#">Locker</a></li>
                          <li><a href="#">Refrigerator</a></li>
                          <li><a href="#">Split AC</a></li>
                          <li><a href="#">Vacuum Cleaner</a></li>
                          <li><a href="#">Washing Machine</a></li>
                          <li><a href="#">Water Dispenser</a></li>
                          <li><a href="#">Window AC</a></li>
                        </ul>
                      </div>
                      <div class="list-item">
                        <h4 class="title">Brands</h4>
                        <ul>
                          <li><a href="#">Black and Decker</a></li>
                          <li><a href="#">Bluestar</a></li>
                          <li><a href="#">Bosch</a></li>
                          <li><a href="#">Godrej</a></li>
                          <li><a href="#">Haier</a></li>
                          <li><a href="#">IFB</a></li>
                          <li><a href="#">Panasonic</a></li>
                          <li><a href="#">Philips</a></li>
                          <li><a href="#">Sony</a></li>
                          <li><a href="#">Voltas</a></li>
                          <li><a href="#">Whirlpool</a></li>
                        </ul>
                      </div>
                    </div>
                  </li>

                  <li class="menu-item-has-children">
                    <a href="#">Travel <i class="fa fa-angle-down"></i></a>
                    <div class="sub-menu mega-menu mega-menu-column-4">
                      <div class="list-item">
                        <h4 class="title">Electronics</h4>
                        <ul>
                          <li><a href="#">Audio</a></li>
                          <li><a href="#">BT Speaker</a></li>
                          <li><a href="#">Soundbar</a></li>
                        </ul>
                        <h4 class="title">Health & Wellness</h4>
                        <ul>
                          <li><a href="#">Hair Dryer</a></li>
                          <li><a href="#">Groomer</a></li>
                          <li><a href="#">Hair Straightener</a></li>
                          <li><a href="#">Shaver</a></li>
                          <li><a href="#">Trimmer</a></li>
                        </ul>
                      </div>
                      <div class="list-item">
                        <h4 class="title">HouseHold</h4>
                        <ul>
                          <li><a href="#">Dishwasher</a></li>
                          <li><a href="#">Food Processor</a></li>
                          <li><a href="#">Hand Toolkit</a></li>
                          <li><a href="#">LED TV</a></li>
                          <li><a href="#">Locker</a></li>
                          <li><a href="#">Refrigerator</a></li>
                          <li><a href="#">Split AC</a></li>
                          <li><a href="#">Vacuum Cleaner</a></li>
                          <li><a href="#">Washing Machine</a></li>
                          <li><a href="#">Water Dispenser</a></li>
                          <li><a href="#">Window AC</a></li>
                        </ul>
                      </div>
                      <div class="list-item">
                        <h4 class="title">Brands</h4>
                        <ul>
                          <li><a href="#">Black and Decker</a></li>
                          <li><a href="#">Bluestar</a></li>
                          <li><a href="#">Bosch</a></li>
                          <li><a href="#">Godrej</a></li>
                          <li><a href="#">Haier</a></li>
                          <li><a href="#">IFB</a></li>
                          <li><a href="#">Panasonic</a></li>
                          <li><a href="#">Philips</a></li>
                          <li><a href="#">Sony</a></li>
                          <li><a href="#">Voltas</a></li>
                          <li><a href="#">Whirlpool</a></li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>

            <div class="header-item item-right nne  d-none">
              <span class="clr-white"><i class="las la-caret-right"></i>Best Deal</span>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default NewHeader