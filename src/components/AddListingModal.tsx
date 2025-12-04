"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";


type AddListingModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onAdded?: (item: Listing) => void;
};

type Listing = {
  id: string;
  name: string;
  price: string;
  category: string;
  description: string;
  image?: string;
};

export default function AddListingModal({
  isOpen,
  onClose,
  onAdded,
}: AddListingModalProps) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Category");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
   const newItem: Listing = {
        id: Date.now().toString(),
        name,
        price,
        category,
        description,
        image: preview || "",
      };
      onAdded?.(newItem);

      console.log("✅ Dummy item added:", newItem);
      alert("✅ Item added successfully (dummy mode)");
      onAdded?.(newItem);
      setName("");
      setPrice("");
      setCategory("Category");
      setDescription("");
      setImage(null);
      setPreview(null);
      setLoading(false);
      onClose();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-2xl p-6 overflow-y-auto max-h-[90vh]">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-lg font-bold text-gray-600">Add New Listing</h1>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-xl"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Product/Service Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded-lg px-4 py-2 text-gray-600"
              required
            />
            <input
              type="number"
              placeholder="Price (₦)"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full border rounded-lg px-4 py-2 text-gray-600"
              required
            />
          </div>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border rounded-lg px-4 py-2 text-gray-600"
            required
          >
            <option value="Category" disabled>
              Select Category
            </option>
            <option>Products</option>
            <option>Services</option>
          </select>
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            className="w-full border rounded-lg px-4 py-2 text-gray-600"
            required
          />
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <p className="text-gray-500">Drop your product pictures here</p>
            <p className="text-gray-400 text-sm mb-4">OR</p>
            <label className="inline-block bg-emerald-600 text-white px-4 py-2 rounded-lg cursor-pointer">
              Upload file
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>

            {preview && (
              <Image
                src={preview}
                alt="preview"
                width={400}
                height={200}
                className="mt-4 w-full h-32 object-cover rounded-md"
              />
            )}
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-end">
            <button
              type="submit"
              disabled={loading}
              className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 disabled:opacity-70"
            >
              {loading ? "Adding..." : "Add Listing"}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
