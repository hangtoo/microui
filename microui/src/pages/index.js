import style from './index.css';

export default function () {
  return (
    <div className={style.container}>
      <h2>Welcome to use QianKun and Microportal ~</h2>
      <p>

        1.目前支持集成umijs模块，通过umi dev命令运行，
        对于需要集成的子应用，在mock的js文件中添加相应的应用信息。
      </p>

      <p>
        2.然后修改.umirc.js文件中的proxy信息，把访问的接口地址指定到实际的子应用的接口地址。
      </p>

      <p>
        3.建议子应用通过umi block生成，便于与QianKun主应用进行对接。相互间隔离也比较少
      </p>
      
    </div>
  );
}
