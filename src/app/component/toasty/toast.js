import { toast } from "react-toastify";
const toasty = (content, option) => {
    console.log("dd");
  toast(content, { progress: false, ...option });
  toast.update(option.toastId, {
    render: content,
    progress: false,
    ...option,
  });
};
export { toasty };
