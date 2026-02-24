// Test the debounced search logic without React
const items = ["Apple", "Banana", "Orange", "Mango", "Grapes"];

class DebouncedSearch {
  constructor() {
    this.items = items;
    this.inputValue = '';
    this.debouncedValue = '';
    this.filteredItems = [...items];
    this.timerId = null;
  }

  // Simulates useEffect cleanup
  cleanup() {
    if (this.timerId) {
      clearTimeout(this.timerId);
      console.log('✓ Cleanup: Timer cleared');
    }
  }

  // Simulates controlled input onChange
  handleInputChange(value) {
    this.inputValue = value;
    console.log(`Input changed: "${value}"`);
    
    // Cleanup previous timer
    this.cleanup();
    
    // Debounce by 500ms
    this.timerId = setTimeout(() => {
      this.debouncedValue = value;
      console.log(`Debounced value updated: "${value}"`);
      this.filterItems();
    }, 500);
  }

  // Simulates filtering logic
  filterItems() {
    this.filteredItems = this.items.filter(item =>
      item.toLowerCase().includes(this.debouncedValue.toLowerCase())
    );
    console.log('Filtered items:', this.filteredItems);
  }

  // Get current filtered items
  getFilteredItems() {
    return this.filteredItems;
  }
}

// Test the component
console.log('=== DebouncedSearch Component Test ===\n');

const component = new DebouncedSearch();
console.log('Initial items:', items);
console.log('');

// Simulate rapid typing (like a user typing fast)
console.log('--- Simulating rapid typing: "a" -> "ap" -> "app" ---');
component.handleInputChange('a');
component.handleInputChange('ap');
component.handleInputChange('app');

// Wait for debounce to complete
setTimeout(() => {
  console.log('\n--- After 500ms debounce ---');
  console.log('Final result:', component.getFilteredItems());
  console.log('');
  
  // Test another search
  console.log('--- Testing search for "mango" ---');
  component.handleInputChange('mango');
  
  setTimeout(() => {
    console.log('\n--- After 500ms debounce ---');
    console.log('Final result:', component.getFilteredItems());
    console.log('');
    
    // Test empty search
    console.log('--- Testing empty search (show all) ---');
    component.handleInputChange('');
    
    setTimeout(() => {
      console.log('\n--- After 500ms debounce ---');
      console.log('Final result:', component.getFilteredItems());
      console.log('\n✅ All tests completed!');
    }, 600);
  }, 600);
}, 600);
