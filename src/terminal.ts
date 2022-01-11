"use strict";

import * as vscode from "vscode";

let terminalInstance = vscode.window.createTerminal("Running tests");

export function runTest() {
  // Get the current editor
  const activeEditor = vscode.window.activeTextEditor;

  // Abort if there is no editor available
  if (!activeEditor) {
    return vscode.window.showErrorMessage(
      "No file selected. Select a Ruby test file."
    );
  }

  const currentFile = activeEditor.document.fileName;

  const reValidFile = /(_|\.)test\.(rb|js)$/;

  // Only works with Ruby or JS test files
  if (!reValidFile.test(currentFile)) {
    return vscode.window.showErrorMessage(
      "Hrm. That doesn't seem to be a Ruby or Javascript test file."
    );
  }

  // Save the test first
  activeEditor.document.save();

  // Get the line number, assemble the command
  let currentPosition: vscode.Position = activeEditor.selection.active;
  const reRubyFile = /\.rb$/;
  const lineNumber = currentPosition.line + 1;
  const suffix = lineNumber > 3 ? `:${lineNumber}` : "";
  const commandText = reRubyFile.test(currentFile) ?
    `bundle exec rails test ${currentFile}${suffix}` :
    `yarn test ${currentFile}`;

  // Run the command
  vscode.commands.executeCommand("workbench.action.terminal.clear");
  terminalInstance.show(true);
  terminalInstance.sendText(commandText);

  return;
}
