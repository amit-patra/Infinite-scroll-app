import { useRef, useCallback } from "react";

export const useInfiniteScroll = (loading, hasMore, setPage) => {
  const observer = useRef();

  const lastElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prev) => prev + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore, setPage],
  );

  return lastElementRef;
};

/**
 * * Code Explanintion
🔸 Step 1: Store observer
const observer = useRef();

👉 Why?

We need to persist observer across renders

useRef does NOT re-render

🔸 Step 2: Create callback ref
const lastElementRef = useCallback((node) => {

👉 This function will be attached to the last item

🔸 Step 3: Stop if loading
if (loading) return;

👉 Prevent multiple API calls

🔸 Step 4: Disconnect old observer
if (observer.current) observer.current.disconnect();

👉 VERY IMPORTANT

Prevent multiple observers

Clean previous one

🔸 Step 5: Create new observer
observer.current = new IntersectionObserver((entries) => {
🔸 Step 6: Check visibility
if (entries[0].isIntersecting && hasMore) {
  setPage((prev) => prev + 1);
}

👉 Meaning:

Last element visible

More data available
➡️ Load next page

🔸 Step 7: Attach observer
if (node) observer.current.observe(node);

👉 Observe the last element
 */
