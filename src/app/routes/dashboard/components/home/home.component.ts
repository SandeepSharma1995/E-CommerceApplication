import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { ProductDetails } from '../../../../model/productDetails';
import { MatSnackBar } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UserDetails } from '../../../../model/userDetails';
import { OrderSummary } from '../../../../model/orderSummary';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
  }]
})
export class HomeComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup
  productArray: ProductDetails[] = []
  productArray1: ProductDetails[] = []
  productArray2: ProductDetails[] = []
  shoppingList: ProductDetails[] = []
  userDetails: UserDetails
  orderList: ProductDetails[] = [];
  viewHome: boolean = true;
  viewCart: boolean = false;
  viewCheckout: boolean = false
  shopCount: number = 0
  totalPrice: number = 0
  amtToBePaid: number = 0
  constructor(private _formBuilder: FormBuilder, private snackBar: MatSnackBar, public dialog: MatDialog) { }

  ngOnInit() {
    this.updateProductList();
    this.firstFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      address: ['', Validators.required],
      pincode: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      paymentOption: ['Credit Card', Validators.required]
    });
  }

  addToCart(product) {
    this.shopCount = this.shopCount + 1
    this.totalPrice = this.totalPrice + product.productPrice
    this.shoppingList.push(product)
    this.openSnackBar(product.productName + " added to cart.", "OK")

  }

  buyProduct(product) {
    this.orderList = []
    this.amtToBePaid = product.productPrice
    this.orderList.push(product)
    this.viewCart = false;
    this.viewHome = false
    this.viewCheckout = true
  }

  placeOrder() {
    this.amtToBePaid = this.totalPrice
    this.orderList = this.shoppingList
    this.shoppingList = []
    this.shopCount = 0
    this.viewCart = false;
    this.viewHome = false
    this.viewCheckout = true
  }

  goToCart() {
    this.viewCart = true;
    this.viewHome = false
    this.viewCheckout = false
  }
  
  fetchLocation() {
    //fething location from browser
    var startPos;
    var geoSuccess = function (position) {
      startPos = position;
    };
    this.openSnackBar("Problem fetching your location", "OK")
    console.log(navigator.geolocation.getCurrentPosition(geoSuccess));
    // let address = "154"
    // let pincode = "110018"
    // let state = "bvnm"
    // let city = "hjb"
    // //populating into form 
    // this.secondFormGroup.setValue({ address: address, pincode: pincode, state: state, city: city })
  }

  confirmOrder() {
    let user: UserDetails = new UserDetails()
    user.userName = this.firstFormGroup.get("name").value
    user.userEmail = this.firstFormGroup.get("email").value
    user.userPhone = this.firstFormGroup.get("phone").value
    user.userAddress = this.secondFormGroup.get("address").value
    user.userPincode = this.secondFormGroup.get("pincode").value
    user.userState = this.secondFormGroup.get("state").value
    user.userCity = this.secondFormGroup.get("city").value
    user.userModeOfPayment = this.thirdFormGroup.get("paymentOption").value
    this.userDetails = user
    this.dialog.open(OrderConfirmedComponent, {
      width: '750px',
      data: { orderList: this.orderList, userDetails: this.userDetails }
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }

  updateProductList() {
    this.insertIntoProductArray("Men's Cotton shrug", "assets/images/product1.jfif", 1000)
    this.insertIntoProductArray("Men's TShirt", "assets/images/product2.jfif", 1250)
    this.insertIntoProductArray("Men's Cotton Shirt", "assets/images/product3.jfif", 1600)
    this.insertIntoProductArray("Men's Cotton Tshirt", "assets/images/product4.jfif", 5000)
    this.insertIntoProductArray("Men's Polo shirt", "assets/images/product5.jfif", 800)
    this.insertIntoProductArray("Men's Chinos", "assets/images/product6.jfif", 1990)
    this.insertIntoProductArray("Women' Solid Kurta", "assets/images/product7.jfif", 1060)
    this.insertIntoProductArray("Women' Solid Kurta", "assets/images/product8.jfif", 1500)
    this.insertIntoProductArray("Women' Solid Kurti", "assets/images/product9.jfif", 900)
    this.insertIntoProductArray("Women' A-Line Kurta", "assets/images/product10.jfif", 600)

    this.insertIntoProductArray1("Timex Watch", "assets/images/product11.jfif", 800)
    this.insertIntoProductArray1("Titan Watch", "assets/images/product12.jfif", 600)
    this.insertIntoProductArray1("Maxima Wrist Watch", "assets/images/product13.jfif", 1800)
    this.insertIntoProductArray1("Wireless Headphones", "assets/images/product14.jfif", 100)
    this.insertIntoProductArray1("Bluetooth Spaeker", "assets/images/product15.jfif", 1800)
    this.insertIntoProductArray1("Mi Speaker", "assets/images/product16.jfif", 1600)
    this.insertIntoProductArray1("Bose Headphones", "assets/images/product17.jfif", 1080)
    this.insertIntoProductArray1("Mobile Cover", "assets/images/product18.jfif", 400)
    this.insertIntoProductArray1("Mobile Screen Guard", "assets/images/product19.jfif", 666)
    this.insertIntoProductArray1("Mobile Back Cover", "assets/images/product20.jfif", 1077)

    this.insertIntoProductArray2("Mi 32'' TV", "assets/images/product21.jfif", 1055)
    this.insertIntoProductArray2("Samsung Tv", "assets/images/product22.jfif", 1555)
    this.insertIntoProductArray2("Samsung Microwave oven", "assets/images/product29.jfif", 1999)
    this.insertIntoProductArray2("Mi 64'' LED TV", "assets/images/product23.jpg", 888)
    this.insertIntoProductArray2("Mi Refrigerator", "assets/images/product25.jfif", 1670)
    this.insertIntoProductArray2("Samsung Refrigerator", "assets/images/product26.jfif", 444)
    this.insertIntoProductArray2("Panasonic Refrigerator", "assets/images/product27.jfif", 688)
    this.insertIntoProductArray2("Mi Refrigerator", "assets/images/product28.jfif", 599)
    this.insertIntoProductArray2("Panasonic LED TV", "assets/images/product24.jfif", 999)
    this.insertIntoProductArray2("Samsung Air Condition", "assets/images/product30.jfif", 1300)

  }

  insertIntoProductArray(name, imagesrc, price) {
    let product: ProductDetails = new ProductDetails
    product.productName = name
    product.productImage = imagesrc
    product.productPrice = price
    this.productArray.push(product)
  }

  insertIntoProductArray1(name, imagesrc, price) {
    let product: ProductDetails = new ProductDetails
    product.productName = name
    product.productImage = imagesrc
    product.productPrice = price
    this.productArray1.push(product)
  }

  insertIntoProductArray2(name, imagesrc, price) {
    let product: ProductDetails = new ProductDetails
    product.productName = name
    product.productImage = imagesrc
    product.productPrice = price
    this.productArray2.push(product)
  }
}

@Component({
  selector: 'order-confirmed',
  templateUrl: './order-confirmed.component.html',
})
export class OrderConfirmedComponent {

  constructor(public dialogRef: MatDialogRef<OrderConfirmedComponent>,
    @Inject(MAT_DIALOG_DATA) public data: OrderSummary) { }


}