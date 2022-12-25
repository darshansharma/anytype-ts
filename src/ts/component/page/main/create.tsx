import * as React from 'react';
import { Loader, Frame } from 'Component';
import { I, ObjectUtil } from 'Lib';
import { observer } from 'mobx-react';

const PageMainCreate = observer(class PageMainCreate extends React.Component<I.PageComponent> {

	render () {
		return (
			<Frame>
				<Loader id="loader" />
			</Frame>
		);
	};
	
	componentDidMount () {
		ObjectUtil.create('', '', {}, I.BlockPosition.Bottom, '', {}, [ I.ObjectFlag.DeleteEmpty, I.ObjectFlag.SelectType ], (message: any) => {
			ObjectUtil.openRoute({ id: message.targetId });
		});
	};

});

export default PageMainCreate;