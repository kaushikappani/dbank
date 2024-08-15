export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'checkBal' : IDL.Func([], [IDL.Float64], []),
    'compound' : IDL.Func([], [], ['oneway']),
    'topUp' : IDL.Func([IDL.Float64], [], ['oneway']),
    'withDraw' : IDL.Func([IDL.Float64], [], ['oneway']),
  });
};
export const init = ({ IDL }) => { return []; };
