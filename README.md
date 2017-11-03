# Rails Test Helper 

This is an extension for Visual Code Studio. It contains a couple of utilities to help with TDD tasks while working on a Ruby on Rails application.

1. Toggle between an implementation file and it's corresponding test file.
2. Run a test at the current line number. Running the command from the top of the file will run all of the tests.

## Default keybinding

### Toggle between test and implementation:

* `cmd + .` (Commmand + dot on the Mac)
* `ctrl + .` (Control + dot)  

### Run a test: 

* `shift + cmd + r` (Commmand + shift + r on the Mac)
* `shift + ctrl + r` (Control + shift + r)  

## Known Issues

* Assumes Rails conventions and directory structure
* Does not work with RSpec (yet)
* Assumes spring to run tests via bundle exec
* No logic for split views

## Release Notes

### 0.1.0

Initial release of rails-test-helper 

### 0.2.0

Add test run command