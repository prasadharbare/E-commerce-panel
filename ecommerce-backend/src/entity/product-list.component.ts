export class ProductListComponent implements OnInit {
    products: any[] = [];
  
    constructor(private service: ProductService) {}
  
    ngOnInit() {
      this.fetchProducts();
    }
  
    fetchProducts() {
      this.service.getAll().subscribe((res) => this.products = res);
    }
  
    delete(id: number) {
      this.service.delete(id).subscribe(() => this.fetchProducts());
    }
  }
  