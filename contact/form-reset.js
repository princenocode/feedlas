// Contact Form Reset Script
(function() {
    // Wait for DOM to be fully loaded
    window.addEventListener('DOMContentLoaded', function() {
        // Find the form
        const form = document.querySelector('form.framer-1uou8iy');

        if (form) {
            // Create a MutationObserver to watch for changes in the form
            const observer = new MutationObserver(function(mutations) {
                // Check if any mutation added the success indicator
                mutations.forEach(function(mutation) {
                    mutation.addedNodes.forEach(function(node) {
                        // Check if this is the success indicator (checkmark icon)
                        if (node.nodeType === 1 && (
                            node.querySelector && node.querySelector('[data-framer-name="Icon"]') ||
                            node.closest && node.closest('[data-framer-name="Icon"]')
                        )) {
                            // Form was successfully submitted, reset after 3 seconds
                            setTimeout(function() {
                                resetForm();
                            }, 3000);
                        }
                    });
                });
            });

            // Observe the form and its children for changes
            observer.observe(form.parentElement, {
                childList: true,
                subtree: true
            });

            // Fallback: Also listen for submit event
            form.addEventListener('submit', function(e) {
                setTimeout(function() {
                    resetForm();
                }, 3000);
            });

            function resetForm() {
                // Reset all form inputs
                const inputs = form.querySelectorAll('input, textarea');
                inputs.forEach(function(input) {
                    input.value = '';
                    // Remove the filled class and add empty class
                    input.classList.remove('framer-form-input-filled');
                    input.classList.add('framer-form-input-empty');
                });

                // Reset the form
                form.reset();

                console.log('Form reset successfully');
            }
        }
    });
})();
