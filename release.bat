@echo off
git archive --format zip --output dists\LPS-SIMSELL.zip --worktree-attributes --verbose -9 HEAD
pause