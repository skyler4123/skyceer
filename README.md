# README

This repo is a collection that combine Stimulus and ViewComponent to create the re-build basic components to reuse in UI with behaviors.

Setup
* Your Rails app must initial success with Stimulus and ViewComponent

Usage
* Just copy and past the components you want to your project and then use them in UI

Rules
* The basic components live at top level of /components. Expect some components that interage with 3rd libs.
* A component communicate with others via 'Global Event' controller name 'global'. Component A dispatch a event to 'global' then 'global' send that event to every components that listening to them.
* A component can not dispatch and receive the same event.
* Only 'ButtonComponent' can dispatch event.
* When 'ButtonComponent' want to to own its action (not event), the 'action' name must be prefixed by 'self' like 'selfOpen'.