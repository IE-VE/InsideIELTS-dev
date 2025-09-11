# LESSON EDUCATIONAL CONTENT PROTECTION

## CRITICAL: Educational content keeps disappearing from lesson-02-i

### Root Cause:
Unknown automated process is overwriting src/routes/IETPP/lesson-02/lesson02-i/+page.svelte

### Protection Measures:
1. **Backup created**: +page.svelte.backup contains full educational content
2. **Required sections**: Each lesson MUST contain:
   - "What to Expect" section
   - "Key Strategies" section  
   - "Common Pitfalls" section

### Restoration Command:
If content disappears again:
```bash
cp src/routes/IETPP/lesson-02/lesson02-i/+page.svelte.backup src/routes/IETPP/lesson-02/lesson02-i/+page.svelte
```

### Verification Command:
```bash
grep -n "What to Expect\|Key Strategies\|Common Pitfalls" src/routes/IETPP/lesson-02/lesson02-i/+page.svelte
```

**Expected output should show 3 matches for the educational section headings**