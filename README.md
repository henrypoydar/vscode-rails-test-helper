# Rails Test Helper

This is an extension for Visual Code Studio. It contains a couple of utilities to help with TDD tasks while working on a Ruby on Rails application.

1. Toggle between an implementation file and it's corresponding test file.
2. Run a test at the current line number. Running the command from the top of the file will run all of the tests.

## Default keybinding

### Toggle between test and implementation:

* `cmd + .` (Commmand + dot on the Mac)
* `ctrl + .` (Control + dot)

Command for re-mapping: `extension.railsTestHelper.toggle`

### Run a test:

* `shift + cmd + r` (Commmand + shift + r on the Mac)
* `shift + ctrl + r` (Control + shift + r)

Command for re-mapping: `extension.railsTestHelper.runTest`

Tests will run at the current line number unless you're at the top of the file (first 3 lines), in which case all the tests in the file will be run.

## TODO/Known Issues

* Assumes Rails conventions and directory structure - the toggles are between a parallel mapping of the `./app` and `./test` directory.
* Doesn't work with Rspec
* Assumes spring to run tests via `bundle exec rails test`, make this configurable with a default
* Assumes `yarn test` for running any JS unit tests, make this configurable with a default
* Assumes JS tests are named in the `file.test.js` format and Ruby tests in the `file_test.rb` format
* No logic for split views
