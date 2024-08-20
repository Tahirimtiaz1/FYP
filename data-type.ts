export interface SignUp {
  id: number,
  name: string,
  email: string,
  password: string,
  confirmpassword: string,
}
export interface login {
  email: string,
  password: string,
}
export interface product {
  id: number;
  sellerName: string;
  shopName: string;
  shopLocation: string;
  city: string;
  sparePartName: string;
  description: string;
  price: number;
  model: number;
  year: number;
  carName: string;
  productType: string;
  imageURL: string;
  quantity: number;
  review: string;
  rating: number[];
  dateAdded: Date; 
  dateListed: Date;
}

export interface Car {
  id: number;
  sellerName: string;
  contactInfo: string;
  city: string;
  vehicleName: string,
  vehicleType: string;
  make: string;
  model: string;
  year: number;
  mileage: number;
  engineCapacity: number;
  transmission: string;
  condition: string;
  price: number;
  description: string;
  imageURL: string;
  shopName: string; // Added shopName
  shopLocation: string; // Added shopLocation
}
export interface Message {
  id: number;
  sender: string;
  recipient: string;
  content: string;
  timestamp: Date;
  productId: number; // Add productId property
}
export interface WishlistItem {
  id: number;
  sellerName: string;
  shopName: string;
  shopLocation: string;
  city: string;
  sparePartName?: string; // Optional for product properties
  carName?: string; // Optional for car properties
  productType?: string; // Optional for product properties
  imageURL: string;
  quantity?: number; // Optional for product properties
  price: number;
}
export interface OrderFormData {
  id: number;
  firstName: string;
  lastName: string;
  companyName?: string;
  country: string;
  streetAddress: string;
  apartment?: string;
  townCity: string;
  stateCounty: string;
  postcodeZIP: string;
  phone: string;
  email: string;
  products?: OrderProduct[];
  totalPrice: number;
  dateOrdered: string;
  status?: string; // Make status property optional
}




export interface OrderProduct {
  name: string; // Product name
  quantity: number; // Quantity of the product
  price: number; // Price of the product
  description: string; // Description of the product
  // Add any other relevant properties here
}


export interface Review {
  productId: number;
  content: string;
  rating: number;
  timestamp: Date;
  id: number;
}



