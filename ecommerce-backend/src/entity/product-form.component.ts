export class ProductFormComponent {
    productForm: FormGroup;
  
    constructor(private fb: FormBuilder, private service: ProductService) {
      this.productForm = this.fb.group({
        sku: [''],
        name: [''],
        price: [0],
        images: [[]],
      });
    }
  
    submit() {
      this.service.create(this.productForm.value).subscribe();
    }
  
    onImageUpload(event: any) {
      const files = Array.from(event.target.files);
      const urls = files.map((file: any) => URL.createObjectURL(file));
      this.productForm.patchValue({ images: urls.map(url => ({ url })) });
    }
  }
  