import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoslistComponent } from './todoslist.component';

describe('TodoslistComponent', () => {
  let component: TodoslistComponent;
  let fixture: ComponentFixture<TodoslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoslistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
