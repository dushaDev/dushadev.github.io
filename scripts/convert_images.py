import os
from PIL import Image

def convert_png_to_webp(directory):
    total_original_size = 0
    total_new_size = 0
    converted_count = 0

    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.lower().endswith('.png'):
                png_path = os.path.join(root, file)
                # Skip if it's already webp/not png
                webp_path = os.path.splitext(png_path)[0] + '.webp'
                
                original_size = os.path.getsize(png_path)
                total_original_size += original_size
                
                try:
                    with Image.open(png_path) as img:
                        # Convert RGBA to RGB if saving as WebP with lossy compression,
                        # but WebP actually supports RGBA (lossy/lossless). Let's keep quality high.
                        img.save(webp_path, 'WEBP', quality=85)
                    
                    new_size = os.path.getsize(webp_path)
                    total_new_size += new_size
                    
                    # Delete original PNG
                    os.remove(png_path)
                    converted_count += 1
                    
                    print(f"Converted {file} -> {os.path.basename(webp_path)}:")
                    print(f"  Original: {original_size / 1024:.1f} KB")
                    print(f"  Optimized: {new_size / 1024:.1f} KB (Saved {(original_size - new_size) / original_size * 100:.1f}%)")
                except Exception as e:
                    print(f"Error converting {file}: {e}")
                    
    print("\n--- Optimization Summary ---")
    print(f"Total files converted: {converted_count}")
    print(f"Original total size: {total_original_size / (1024*1024):.2f} MB")
    print(f"Optimized total size: {total_new_size / (1024*1024):.2f} MB")
    if total_original_size > 0:
        savings = total_original_size - total_new_size
        print(f"Total space saved: {savings / (1024*1024):.2f} MB ({savings / total_original_size * 100:.1f}%)")

if __name__ == '__main__':
    images_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '../public/images'))
    print(f"Starting image conversion in: {images_dir}")
    convert_png_to_webp(images_dir)
