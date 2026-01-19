import { Component } from '@angular/core';

@Component({
  selector: 'app-grupo-medicamentos',
  templateUrl: './grupo-medicamentos.component.html',
  styleUrls: ['./grupo-medicamentos.component.scss']
})
export class GrupoMedicamentosComponent {

  titles = ['Analgesicos', 'Anti-microbianos', 'Anti-hipertensivos'
    , 'Gastrointestinales', 'Insulinas', 'Respiratorios', 'Neurologicos'
    , 'Anti-coagulantes', 'Esteroides'
  ]

}
