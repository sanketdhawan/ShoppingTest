import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss'],
})
export class RecipeEditComponent implements OnInit {
  id!: number;
  editMode = false;

  recipeForm!: FormGroup;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.editMode = params['id'] != null;
      console.log(this.editMode);
    });
  }

  private initForm() {
    this.recipeForm = new FormGroup({
      name: new FormControl(),
    });
  }
}
