'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">digital-book-store-ui documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-532561a981018a9d834197d459f86106aa3d3763d407a0003a15baa89260c39dac7c6c72a135278dcf9204b01f325b33e74a690912a32271281fe9fbd0e5149f"' : 'data-bs-target="#xs-components-links-module-AppModule-532561a981018a9d834197d459f86106aa3d3763d407a0003a15baa89260c39dac7c6c72a135278dcf9204b01f325b33e74a690912a32271281fe9fbd0e5149f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-532561a981018a9d834197d459f86106aa3d3763d407a0003a15baa89260c39dac7c6c72a135278dcf9204b01f325b33e74a690912a32271281fe9fbd0e5149f"' :
                                            'id="xs-components-links-module-AppModule-532561a981018a9d834197d459f86106aa3d3763d407a0003a15baa89260c39dac7c6c72a135278dcf9204b01f325b33e74a690912a32271281fe9fbd0e5149f"' }>
                                            <li class="link">
                                                <a href="components/AddReviewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddReviewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddToCartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddToCartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddbookComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddbookComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdminReturnProcessComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminReturnProcessComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AllReviewsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AllReviewsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AverageRatingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AverageRatingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BookCarouselComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BookCarouselComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BookHeroComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BookHeroComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BookdetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BookdetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FilterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OrderDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OrderListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OrderManagementComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderManagementComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PaymentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaymentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PlaceOrderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PlaceOrderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReviewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReviewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReviewsByBookIdComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReviewsByBookIdComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchtitleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchtitleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SignupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SignupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StarsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StarsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UpdateTrackingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpdateTrackingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UpdatebookComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpdatebookComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewAllReviewsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ViewAllReviewsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewbookidComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ViewbookidComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-532561a981018a9d834197d459f86106aa3d3763d407a0003a15baa89260c39dac7c6c72a135278dcf9204b01f325b33e74a690912a32271281fe9fbd0e5149f"' : 'data-bs-target="#xs-injectables-links-module-AppModule-532561a981018a9d834197d459f86106aa3d3763d407a0003a15baa89260c39dac7c6c72a135278dcf9204b01f325b33e74a690912a32271281fe9fbd0e5149f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-532561a981018a9d834197d459f86106aa3d3763d407a0003a15baa89260c39dac7c6c72a135278dcf9204b01f325b33e74a690912a32271281fe9fbd0e5149f"' :
                                        'id="xs-injectables-links-module-AppModule-532561a981018a9d834197d459f86106aa3d3763d407a0003a15baa89260c39dac7c6c72a135278dcf9204b01f325b33e74a690912a32271281fe9fbd0e5149f"' }>
                                        <li class="link">
                                            <a href="injectables/BookInfoService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BookInfoService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/BookService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BookService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/InventoryService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InventoryService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/OrderService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ReviewService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReviewService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/OrderManagementModule.html" data-type="entity-link" >OrderManagementModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/OrderManagementRoutingModule.html" data-type="entity-link" >OrderManagementRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/CategorybooksComponent.html" data-type="entity-link" >CategorybooksComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CategorybookslistComponent.html" data-type="entity-link" >CategorybookslistComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DeletebookComponent.html" data-type="entity-link" >DeletebookComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Book.html" data-type="entity-link" >Book</a>
                            </li>
                            <li class="link">
                                <a href="classes/BookResponse.html" data-type="entity-link" >BookResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/Review.html" data-type="entity-link" >Review</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/BookInfoService.html" data-type="entity-link" >BookInfoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BookService.html" data-type="entity-link" >BookService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/InventoryService.html" data-type="entity-link" >InventoryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OrderService.html" data-type="entity-link" >OrderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ReviewService.html" data-type="entity-link" >ReviewService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthAdminGuard.html" data-type="entity-link" >AuthAdminGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/AuthCustomerGuard.html" data-type="entity-link" >AuthCustomerGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Book.html" data-type="entity-link" >Book</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CartItem.html" data-type="entity-link" >CartItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Order.html" data-type="entity-link" >Order</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PaymentDetails.html" data-type="entity-link" >PaymentDetails</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ReturnDetails.html" data-type="entity-link" >ReturnDetails</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TrackingDetails.html" data-type="entity-link" >TrackingDetails</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});