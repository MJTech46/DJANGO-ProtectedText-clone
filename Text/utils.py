import re
import unicodedata

def url_safe_string(value: str) -> str:
    # Convert to lowercase
    value = value.lower()
    
    # Remove accents and special characters
    value = unicodedata.normalize('NFKD', value).encode('ascii', 'ignore').decode('ascii')
    
    # Replace spaces with hyphens
    value = re.sub(r'\s+', '-', value)
    
    return value