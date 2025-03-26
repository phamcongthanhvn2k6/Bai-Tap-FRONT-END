let i;
for (i = 8; i > 0; i--) {
    console.log('*'.repeat(i));
}
for (i = 1; i <= 8; i++) {
    console.log('*'.repeat(i));
}
for (i = 1; i <= 8; i++) {
    console.log(' '.repeat(8 - i) + '*'.repeat(i));
}

for (i = 8; i > 0; i--) {
    console.log(' '.repeat(8 - i) + '*'.repeat(i));
}