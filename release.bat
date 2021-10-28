@echo off
git archive --format zip --output dists\LPS-PSVault-Resources.zip --worktree-attributes --verbose -9 HEAD
pause