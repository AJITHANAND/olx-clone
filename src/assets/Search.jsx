export default function Search(props) {
    return( <svg
        width={props.width ? props.width :"25px"}
        height={props.heigh ? props.heigh : "25px"}
        viewBox="0 0 1024 1024"
        data-aut-id="icon"
        color={props.color ? props.color :''}
        // className
        fillRule="evenodd"
      >
        <path
          d="M448 725.333c-152.917 0-277.333-124.416-277.333-277.333s124.416-277.333 277.333-277.333c152.917 0 277.333 124.416 277.333 277.333s-124.416 277.333-277.333 277.333v0zM884.437 824.107v0.021l-151.915-151.936c48.768-61.781 78.144-139.541 78.144-224.192 0-199.979-162.688-362.667-362.667-362.667s-362.667 162.688-362.667 362.667c0 199.979 162.688 362.667 362.667 362.667 84.629 0 162.411-29.376 224.171-78.144l206.144 206.144h60.352v-60.331l-54.229-54.229z"
        />
      </svg>)
}