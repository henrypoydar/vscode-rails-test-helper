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

  const reFileType = /_test\.rb$/;
  const currentFile = activeEditor.document.fileName;

  // Only works with Ruby test files
  if (!reFileType.test(currentFile)) {
    return vscode.window.showErrorMessage(
      "Hrm. That doesn't seem to be a Ruby test file."
    );
  }

  // Save the test first
  activeEditor.document.save();

  // Get the line number, assemble the command
  let currentPosition: vscode.Position = activeEditor.selection.active;
  const lineNumber = currentPosition.line + 1;
  const suffix = lineNumber > 3 ? `:${lineNumber}` : "";
  const commandText = `bundle exec spring rails test ${activeEditor.document
    .fileName}${suffix}`;

  // Run the command
  vscode.commands.executeCommand("workbench.action.terminal.clear");
  terminalInstance.show(true);
  terminalInstance.sendText(commandText);

  return;
}
