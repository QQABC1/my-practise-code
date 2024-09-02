package ui;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;
import java.util.Random;
import javax.swing.*;
import javax.swing.border.BevelBorder;
public class GameJFrame extends JFrame implements KeyListener,ActionListener{
	//创建二维数组
	//加载打乱的数据
	int[][] data=new int[4][4];
	//记录空白方块在二维数组的位置
	int x=0;
	int y=0;
	//定义一个变量，记录当前展示图片的路径
	String path="D:\\java\\laboratory\\image\\animal\\animal3\\";
	//判断是否完成图片的数组
	int [][] win= {
			{1,2,3,4},
			{5,6,7,8},	
			{9,10,11,12},	
			{13,14,15,0},	
			
	};
	//定义变量统计步数
	int step=0;
	//创建菜单栏下面的选项
	JMenuItem replay=new JMenuItem("重新游戏");
	JMenuItem relogin=new JMenuItem("重新登录");
	JMenuItem close=new JMenuItem("关闭游戏");
	JMenuItem account=new JMenuItem("公众号");
	public GameJFrame(){
		initJFrame();
		//初始化菜单
		initJMenuBar();
		//初始化数据
		initData();
		initImage();
		//显示界面
		this.setVisible(true);
	}
	private void initImage() {
		//清空原本已经出现的所有图片
		this.getContentPane().removeAll();
		if(victory()) {
			//显示胜利图标
			JLabel winJLabel=new JLabel(new ImageIcon("D:\\java\\laboratory\\image\\win.png"));
			winJLabel.setBounds(203, 283, 197, 73);
			this.getContentPane().add(winJLabel);
		}
		JLabel stepCount=new JLabel("步数"+step);
		stepCount.setBounds(50, 30, 100, 20);
		this.getContentPane().add(stepCount);
		
		for(int i=0;i<4;i++) {
				for(int j=0;j<4;j++) {
					ImageIcon icon=new ImageIcon(path+data[i][j]+".jpg");
					JLabel jLabel= new JLabel(icon);
					jLabel.setBounds(105*j+83,105*i+134 ,105 ,105); 
					//给图片添加边框
					jLabel.setBorder(new BevelBorder(1));
					this.getContentPane().add(jLabel);
					
				}
		}
		//添加游戏背景图片
				ImageIcon bg=new ImageIcon("D:\\java\\laboratory\\image\\background.png");
				JLabel background=new JLabel(bg);
				background.setBounds(40, 40, 508, 560);
				this.getContentPane().add(background);
				//刷新一下界面
				this.getContentPane().repaint();
	}
	//打乱数据
	private void initData() {
		int[] tem= {0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15};
		//通过获得随机索引，进行数组数据的交换
		Random r=new Random();
		for(int i=0;i<tem.length;i++) {
			int index=r.nextInt(tem.length);
			int t=tem[i];
			tem[i]=tem[index];
			tem[index]=t;
		}
		//给二维数组添加数据
		for(int i=0;i<tem.length;i++) {
			if(tem[i]==0) {
				x=i/4;
				y=i%4;
			}
			data [i/4][i%4]=tem[i];
				
		}
	}	
	private void initJFrame() {
		//设置界面宽高
				this.setSize(603,680);
				//设置界面标题
				this.setTitle("拼图单机版 v1.0");
				//设置页面置顶
				this.setAlwaysOnTop(true);
				//页面居中
				this.setLocationRelativeTo(null);
				//取消默认居中放置，从而按x y轴放置
				this.setLayout(null);
				//关闭模式
				this.setDefaultCloseOperation(3);
				//给整个界面添加键盘监听事件
				this.addKeyListener(this);
	}
	private void initJMenuBar() {
		//创建菜单栏
		JMenuBar jmenubar=new JMenuBar();
		JMenu function=new JMenu("功能");
		JMenu about=new JMenu("关于我们");
		 function.add(replay);
		 function.add(relogin);
		 function.add(close);
		 about.add(account);
		 jmenubar.add(function);
		 jmenubar.add(about);
		 this.setJMenuBar(jmenubar);
		 //给菜单栏绑定事件
		 replay.addActionListener(this);
		 relogin.addActionListener(this);
		 close.addActionListener(this);
		 account.addActionListener(this);
	}
	//键盘监听事件的实现
	@Override
	public void keyTyped(KeyEvent e) {
		// TODO Auto-generated method stub
		
	}
	//按下不松的时候调用
	@Override
	public void keyPressed(KeyEvent e) {
		int code=e.getKeyCode();
		//按下A键时
		if(code == 65) {
			//把界面中的图片删除
			this.getContentPane().removeAll();
			//加载完整的图片
			JLabel all=new JLabel(new ImageIcon(path+"all.jpg"));
			all.setBounds(83,134,420,420);
			this.getContentPane().add(all);
			//加载背景图片
			ImageIcon bg=new ImageIcon("D:\\java\\laboratory\\image\\background.png");
			JLabel background=new JLabel(bg);
			background.setBounds(40, 40, 508, 560);
			this.getContentPane().add(background);
			//刷新一下界面
			this.getContentPane().repaint();
		}
		
		
	}
	@Override
	public void keyReleased(KeyEvent e) {
		//如果胜利，则结束此方法
		if(victory()) {
			return;
		}
		int code=e.getKeyCode();
		if(code==37) {
			if(y == 3) {
				return;
			}
			System.out.println("向左移动");
			data[x][y]=data[x][y+1];
			data[x][y+1]=0;
			y++;
			step++;
			initImage();
		}
		else if(code==38) {
			if(x == 3) {
				return;
			}
			System.out.println("向上移动");
			//数组中的数字与空白处交换
			//x,y表示 空白方块
			//x+1，y表示空白方块下方的数字
			//进行数字交换
			data[x][y]=data[x+1][y];
			data[x+1][y]=0;
			x++;
			step++;
			initImage();
		}
		else if(code==39) {
			if(y == 0) {
				return;
			}
			System.out.println("向右移动");
			data[x][y]=data[x][y-1];
			data[x][y-1]=0;
			y--;
			step++;
			initImage();
		}
		else if(code==40) {
			//表示空白方块已经到达最下方，不能再向下
			if(x == 0) {
				return;
			}
			//空白方块上方数字与空白处数字进行交换
			System.out.println("向下移动");
			data[x][y]=data[x-1][y];
			data[x-1][y]=0;
			x--;
			step++;
			initImage();
		}
		//松开a键后恢复原有图片
		else if(code == 65) {
			initImage();
		}
		else if(code == 87) {
			data=new int[][] {
				{1,2,3,4},
				{5,6,7,8},
				{9,10,11,12},
				{13,14,15,0},
			};
			initImage();
		}
	}
	public boolean victory() {
		for(int i=0;i<data.length;i++) {
			for(int j=0;j<data.length;j++) {
				if(data[i][j] != win[i][j]) {
					return false;
				}
			}
		}
		return true;
	}
	
	@Override
	public void actionPerformed(ActionEvent e) {
		//获取被点击的对象
		Object obj=e.getSource();
		if(obj == replay) {
			System.out.println("重新游戏");
			step=0;
			//再次打乱二维数组
			initData();
			//重新加载图片
			initImage();
			
		}

		else if(obj == relogin) {
			System.out.println("重新登录");
			//关闭游戏画面
			this.setVisible(false);
			//打开登录界面
			new LoginJFrame();
		}
		else if(obj == close) {
			System.out.println("关闭游戏");
			//直接关闭虚拟机
			System.exit(0);
		}
		else if(obj == account) {
			System.out.println("公众号");
			//创建一个弹窗对象
			JDialog dialog=new JDialog();
			//创建一个管理图片的容器对象JLabel
			JLabel jLabel=new JLabel(new ImageIcon("D:\\java\\laboratory\\image\\wan.png"));
			jLabel.setBounds(0,0,258,258);
			//把图片添加到弹框当中
			dialog.getContentPane().add(jLabel);
			//设置弹框大小
			dialog.setSize(344,344);
			//弹框居中
			dialog.setLocationRelativeTo(null);
			//弹框置顶
			dialog.setAlwaysOnTop(true);
			//弹框不关闭则无法操作下面的界面
			dialog.setModal(true);
			//让弹框显示出来
			dialog.setVisible(true);
		}
	}
}