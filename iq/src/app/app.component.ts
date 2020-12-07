import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    selectedOption;

    
  constructor(
    private http: HttpClient) {
        
        this.selectedOption = this.response.response.data.product
    }
  response = {
    "response": {
        "data": {
            "site_id": 1,
            "category_id": 234,
            "product_id": 546,
            "product": {
                    "product_name": "iphone",
                    "description": "Consistency and Ease of Use. Thanks to the simple interface and the popularity of iPod touches, which has the same interface, the iPhone feels very familiar to users.",
                    "bulletPts": [
                        "Variety of Accessories and the Apple Store.",
                        "Accessibility and Settings.",
                        "Microsoft Office 365 Support.",
                        "Less Unnecessary Features.",
                        "Less Security Breaches."
                    ],
                    "is_used": false,
                    "is_in_sets": true,
                    "units_per_set": 5,
                    "images": [
                        {
                            "isMain": true,
                            "data": "http://iqnetwork.ddns.net:5003/test/Z01iphone-1.4-(520x540).png"
                        },
                        {
                            "isMain": false,
                            "data": "http://iqnetwork.ddns.net:5003/test/Z01iphone-1.4-(520x540).png"
                        },
                        {
                            "isMain": false,
                            "data": "http://iqnetwork.ddns.net:5003/test/Z01iphone-1.4-(520x540).png"
                        },
                        {
                            "isMain": false,
                            "data": "http://iqnetwork.ddns.net:5003/test/Z01iphone-1.4-(520x540).png"
                        },
                        {
                            "isMain": false,
                            "data": "http://iqnetwork.ddns.net:5003/test/Z01iphone-1.4-(520x540).png"
                        }
                    ],
                    "uniqueProductId": 67576,
                    "variants": [
                        {
                            "name": "Colour",
                            "value": "red"
                        },
                        {
                            "name": "Size",
                            "value": "XL"
                        }
                    ],
                    "is_discount": true,
                    "discount_type": 1,
                    "discount_value": 10,
                    "discounted_price": "",
                    "sku": "10001-R-L",
                    "price": 1000,
                    "in_stock": true,
                    "avialableQty" : 876,
                    
            },
            "related_products": [
                {
                    "img": "http://iqnetwork.ddns.net:5003/test/Z01Mackbook-1.1-(520x540).png",
                    "price": 800,
                    "product_name": "mac pro",
                    "product_id": 23
                },
                {
                  "img": "http://iqnetwork.ddns.net:5003/test/Z01Mackbook-1.1-(520x540).png",
                  "price": 800,
                  "product_name": "mac pro",
                  "product_id": 23
              },
              {
                "img": "http://iqnetwork.ddns.net:5003/test/Z01Mackbook-1.1-(520x540).png",
                "price": 800,
                "product_name": "mac pro",
                "product_id": 23
            },
            {
              "img": "http://iqnetwork.ddns.net:5003/test/Z01Mackbook-1.1-(520x540).png",
              "price": 800,
              "product_name": "mac pro",
              "product_id": 23
          },
                
            ]
        },
        "error": "null"
    }
}
  counterValue = 0;   

  get counter() {
    return this.counterValue;
  }
	
  set counter(value) {
    this.counterValue = value;
  }

  decrement() {
    this.counter--;
  }

  increment() {
    this.counter++;
  }

  ngOnInit ( ) { 
    $(document).ready(function(){
	 
		//carousel-control
		
		$("#myCarousel").mouseover(function(){
			$("#myCarousel .carousel-control").show();
		});

		$("#myCarousel").mouseleave(function(){
			$("#myCarousel .carousel-control").hide();
		});
		
		//active thumbnail
		
		$("#thumbCarousel .thumb").on("click", function(){
			$(this).addClass("active");
			$(this).siblings().removeClass("active");
		
		});
		
		//carousel slides
		
		$('#myCarousel').on('slid.bs.carousel', function(){
		   var index = $('.carousel-inner .item.active').index();
		   //console.log(index);
		   var thumbnailActive = $('#thumbCarousel .thumb[data-slide-to="'+index+'"]');
		   thumbnailActive.addClass('active');
		   $(thumbnailActive).siblings().removeClass("active");
		   //console.log($(thumbnailActive).siblings()); 
		});
	 });
    }
  

}
