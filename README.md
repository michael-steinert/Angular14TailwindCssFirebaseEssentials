# Angular 14 Tailwind CSS Firebase Essentials

- Angular is a Platform and Framework for Building single-page Client Applications using HTML and TypeScript
- It is written in TypeScript therefore it uses all high-level Concepts of typeScript like Decorators
- It is a component-based Framework for Building scalable Web Applications

## Features

- Angular includes Routing, Form Management and Client-Server Communication
- It contains Developer Tools to help the Development, Building, Testing and Updating of Code

## Architecture

- Every Module is decorated with the Decorator `NgModule`
- A Module references a Component which is decorated with the Decorator `Component`
- Each Module has a Root Module that contains all Declarations of its Components

### Interpolation

- Interpolation refers to embedding Expressions into marked up Text

### Property Binding

- Property Binding sets Values for Properties of HTML Elements or Directives
- From Parent to Child Component Properties are passed via Props and `@Input()`
- From Child to Parent Component Properties are passed via Events and `@Output()`

### Event Binding

- Event Binding listens for and responds to User Actions

### Two-Way Binding

- Two-Way Binding allows Components to share simultaneously Data between each other

### Directives

- Directives are Classes that add additional Behavior to Elements
- Different Types of Directives are:
  - Components that are used with a Template (like `NgClass`, `NgStyle`, `NgModel`)
  - Attribute Directives that change the Appearance or Behavior of an Element, Component or another Directive
  - Structural Directives that change the DOM Layout by Adding and Removing DOM Elements (like `NgIf`, `NgSwitch`, `NgFor`)

### Pipes

- Pipes are Functions to use in Template Expressions that accept an Input Value and return a transformed Value

## Lifecycle

- A Component Instance has a Lifecycle that start when Angular instantiates the Component Class and renders the Component View along with its Child Views
- The Lifecycle continues with Change Detection, as Angular checks to see when data-bound Properties change, and updates both the View and the Component Instance as needed
- The Lifecycle ends when Angular destroys the Component Instance and removes its rendered Template from the DOM
- Directives have a similar Lifecycle, as Angular creates and destroys Instance in the Course of Execution

## Service

- Service is a Category that comprehensive any Value, Function or Feature that an Application needs
- A Service is a Class with a narrow, well-defined Purpose
- It should do something specific and do it well
- A Component should be clean and lean therefore a Service will carry the heavy Loading of Computation
- It should present Properties and Methods for Data Binding and the Application Logic therefore a Component can delegate certain Tasks to Services
- `@Injectable` registers a Service in the service Container from which a Component can inject it

### Dependency Injection

- Dependency Injection is wired into the Angular Framework and used everywhere to provide new Components with the Services they need
- It allows Components to consume Services
- A Component can inject a Service and having Access to that Service Class
