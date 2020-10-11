import { Directive, ElementRef, Input, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[Mydirective]'
})
export class MydirectiveDirective {

  constructor(
    public el:ElementRef,
    public renderer: Renderer2
  ) {}

  //Color peranete en la Dierectiva
  //@Input() Mydirective:boolean
/*ngOnInit(){
  if (this.Mydirective) this.renderer.setStyle(this.el.nativeElement, 'color', "red")
}*/

// Cambio de color al pasar el Maous
  /*  @HostListener("mouseenter")onMouseEnter(){
      this.hover(true)
    }

  @HostListener("mouseleave") onMouseLeave() {
    this.hover(false)
  }


  hover(color:boolean):void {
    if (color) {
      this.renderer.setStyle(this.el.nativeElement, 'color', "red")
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'color', "")
    }
  }*/

  @Input()color:string
  @Input()underline:boolean

  ngOnInit(){   
    this.el.nativeElement.style.color = this.color
    this.el.nativeElement.style.textDecoration = this.underline ? 'underline':""
  }

}
